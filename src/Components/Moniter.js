import { Grid, Typography } from '@mui/material'
import React from 'react';
import Line from "./Line";
import BarComp from "./Bar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Moniter = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({
    name: "",
    age: "",
    problem: "",
    profile: "",
    phoneNumber: "",
    address:""
  });
  const [tempData, setTempdata] = React.useState({});
  const fetch = async() => {
    const { data,patientData } = await axios.get("http://localhost:5000/patient/" + id);
    setData(data);
    
    console.log(data);
  }
  React.useEffect(() => {
    fetch();
  }, [])
  
  
  return (
    <Grid container>
      <Grid item lg={12}>
        <div style={{ display: "InlineBlock" }}>
          <Typography variant="h6">Patient Name: { data.name}</Typography>
          <Typography variant="h6">Patinet Age:{ data.age} </Typography>
          <Typography variant="h6">Patinet Problem: {data.problem} </Typography>
          <Typography variant="h6">Patinet Health Profile: {data.profile} </Typography>
          <Typography variant="h6">Patinet Phone Number:{data.phoneNumber} </Typography>
          <Typography variant="h6">Patinet Address: { data.address} </Typography>
          <Typography variant="h6">pulseRate: { data.pulseRate} </Typography>
          <Typography variant="h6">Patinet Temperature: { data.temperature} </Typography>
        </div>
      </Grid>
      <Grid style={{minHeight:"200px"}} item lg={4}>
        <Typography variant="h3"> Patient Vital Live 1</Typography>
        <Line />
      </Grid>
      <Grid style={{minHeight:"200px"}} item lg={4}>
        <Typography variant="h3"> Patient Vital Live 2</Typography>
        <Line />
      </Grid>
      <Grid style={{minHeight:"200px"}} item lg={4}>
        <Typography variant="h3"> Patient Vital Live 3</Typography>
        <BarComp />
      </Grid>
    </Grid>
  );
}

export default Moniter