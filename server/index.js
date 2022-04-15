const { Schema } = require("@mui/icons-material");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/pulseheal");
const patientSchema = mongoose.Schema({
    name: String,
    age: Number,
    problem: String,
    profile: String,
    phoneNumber: String,
    address:String,
})
const Patient = mongoose.model("Patient", patientSchema);

app.get("/pushdata", (req, res) => {
    const data = [
      {
        name: "Ho-Sook",
        age: "10",
        problem: "Astama",
        profile: "surjery",
        status: "normal",
        phone: "983936790",
        address: "20-40.65 Chennai India",
      },
      {
        name: "Hwa-Young",
        age: "29",
        problem: "Dengue",
        profile: "surjery",
        status: "normal",
        phone: "983936790",
        address: "20-40.65 Chennai India",
      },
      {
        name: "Chin-Mae	",
        age: "23",
        problem: "Malaria",
        profile: "surjery",
        status: "normal",
        phone: "983936790",
        address: "20-40.65 Chennai India",
      },
      {
        name: "Choon-Hee",
        age: "50",
        problem: "Cancer",
        profile: "surjery",
        status: "normal",
        phone: "983936790",
        address: "20-40.65 Chennai India",
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

app.listen(5000, () => {
    console.log("server started");
})