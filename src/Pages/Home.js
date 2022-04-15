import React from 'react'
import Moniter from '../Components/Moniter'
import OutlinedCard from "../Components/Card";
import { Grid } from '@mui/material';
import axios from 'axios';

const Home = () => {
    const [data, setData] = React.useState([
        {
            name: "Ho-Sook",
            id: "12345",
            age: "10",
            profile: "surjery",
            status: "normal"

        },
        {
            name: "Hwa-Young",
            id: "12345",
            age: "29",
            profile: "surjery",
            status: "normal"
        },
        {
            name: "Chin-Mae	",
            id: "12345",
            age: "23",
            profile: "surjery",
            status: "normal"
        },
        {
            name: "Choon-Hee",
            id: "12345",
            age: "50",
            profile: "surjery",
            status: "normal"
        },
    ]);
    const fetch = async() => {
    const { data } = await axios.get("http://localhost:5000/patients/");
        setData(data);
    }
    React.useEffect(() => {
        fetch(); 
    },[])
    return (
        <Grid container spacing={2}>
            {
                data.map(e => {
                    return (
                        <Grid item lg={4}>
                            <OutlinedCard key = {e._id} data={e} />
                        </Grid>
                    );
                })
            }

        </Grid>
    );
}

export default Home