import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";





export default function OutlinedCard({ data }) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card
                style={{ backgroundColor: data.status != "ok" && "#FF7F7F" }}
                variant="outlined"
            >
                <React.Fragment>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            <b>Patient ID : </b>
                            {data._id}
                        </Typography>
                        <Typography variant="h5" component="div">
                            <b>Patient Name : </b> {data.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <b>Patient Age : </b> {data.age}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <b>Patient Status : </b> {data.status}
                        </Typography>
                        <Typography variant="body2">
                            <b>Patient Profile : </b> {data.profile}
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={`patient/${data._id}`}>
                            <Button size="small">Learn More</Button>
                        </a>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}
