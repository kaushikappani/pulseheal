#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

int const PULSE_SENSOR_PIN = 0;
int pulse;
const char* ssid = "J7 max";
const char* password = "chinnu2204";

// Domain Name with full URL Path for HTTP POST Request
const char* server = "http://192.168.43.10:5000/update";
String a;

#include "DHT.h"
#define DHTPIN 10
#define DHTTYPE DHT11 
DHT dht(DHTPIN, DHTTYPE);

unsigned long last_time = 0;
unsigned long timer_delay = 10000;
WiFiClient wifiClient;

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WIFI…");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println("After 10 seconds the first reading will be displayed");
  dht.begin();
}

String readFromMonitor(){
  while(Serial.available()) {
    String a= Serial.readString();// read the incoming data as string
    Serial.println(a);
    }
    return a;
}


void loop() {

  pulse=analogRead(PULSE_SENSOR_PIN);
  a=readFromMonitor();
  float t = dht.readTemperature();
  //Send an HTTP POST request every 10 seconds
  if ((millis()-last_time) > timer_delay) {
 
    if(WiFi.status()== WL_CONNECTED){
      HTTPClient http;
      
   
      http.begin(wifiClient,server);
      
      http.addHeader("Content-Type", "application/json");
      // Data to send with HTTP POST
      String httpRequestData =  "{\"id\":10,\"pulseRate\":"+String(pulse) +",\"temperature\":"+String(t) +",\"monitor\":\"\"}";           
      // Send HTTP POST request
      int httpResponseCode = http.POST(httpRequestData);
     
      Serial.print("HTTP Response code is: ");
      Serial.println(httpResponseCode);
      http.end();
    }
    else {
      Serial.println("WiFi is Disconnected!");
    }
    last_time = millis();
  }
}