const { Schema } = require("@mui/icons-material");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/pulseheal");
const patientSchema = mongoose.Schema({
    name: String,
    age: Number,
    problem: String,
    profile: String,
    phoneNumber: String,
  address: String,
    status:String,
})
const Patient = mongoose.model("Patient", patientSchema);

app.get("/pushdata", (req, res) => {
    const data = [
      {
        name: "Naya",
        age: "10",
        problem: "Astama",
        profile: "surjery",
        status: "normal",
        phone: "983936790",
        address: "20-40.65 Chennai India",
        status: "ok",
      },
      {
        name: "Ishaan",
        age: "29",
        problem: "Dengue",
        profile: "surjery",
        status: "normal",
        phone: "983936790",
        address: "20-40.65 Chennai India",
        status: "ok",
      },
      {
        name: "Inaya",
        age: "23",
        problem: "Malaria",
        profile: "surjery",
        status: "normal",
        phone: "983936790",
        address: "20-40.65 Chennai India",
        status: "Low BP",
      },
      {
        name: "Shyla",
        age: "50",
        problem: "Cancer",
        profile: "surjery",
        status: "normal",
        phone: "983936790",
        address: "20-40.65 Chennai India",
        status: "ok",
      },
    ];
    data.map((e) => {
        const newPatient = new Patient(e);
        newPatient.save();
    })
    res.send("done");

})
app.get("/patients", async(req, res) => {
  const data = await Patient.find({});
  res.send(data);
})
app.get("/patient/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Patient.findById(id);
  console.log(data);
  res.send(data);
})
app.post("/patient/data", (req, res) => {
  console.log(req.body);
  res.send("done");
})

app.listen(5000, () => {
    console.log("server started");
})