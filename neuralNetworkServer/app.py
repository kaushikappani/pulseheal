import flask
from flask import request
from flask_cors import CORS
from tensorflow import keras
import pandas as pd 
import numpy as np
import random


app=flask.Flask(__name__)
CORS(app, support_credentials=True)

model = keras.models.load_model('model.h5')
type_of_beat=['normal', "supraventricular ectopic", "ventricular ectopic", "fusion" ,"unknown"]



r1 = random.randint(0, 99)
test_df = pd.read_csv("D:\projects\PulseHeal\pulseheal\\neuralNetworkServer\\test_data.csv", header = None)
X_test=test_df.iloc[:,:186].values
X_test = X_test.reshape(len(X_test), X_test.shape[1],1)
y_test=test_df[187]
model = keras.models.load_model('D:\projects\PulseHeal\pulseheal\\neuralNetworkServer\model')
type_of_beat=['normal', "supraventricular ectopic", "ventricular ectopic", "fusion" ,"unknown"]

def predict(data):
    preds=model.predict(X_test)
    a=preds[r1]
    indices = np.where(a == a.max())
    return type_of_beat[indices[0].tolist()[0]]

@app.route('/data',methods = ['POST'])
def getProcessedData():
    if request.method == 'POST':
        result = request.get_json()
        id=result['id']
        data=result['data']
        final_output=predict(data)
        return {"id":id,"result":final_output}

if __name__ == '__main__':
    app.run(debug=True)
