import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Navigate from "./Navigate.jsx";
import Moments from "./Moments.jsx";
import Contests from "./Contest";
import { Switch } from "react-router";
import { Route } from "react-router";


const Background = "https://i.ibb.co/1ZM4mf9/Tourists-looking-at-paintings-in-art-gallery-vector-illustration-Modern-art-museum-exposition-Artwor.jpg";
const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "60vh",
        backgroundSize: "100%",
        backgroundPosition: "50% 50%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${Background})`,
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down("md")]: {
            height: "30vh",
        }
    },
    heading: {
        fontFamily: "'Dosis', sans-serif",
        fontSize: "5rem",
        padding: "10px 0",
        [theme.breakpoints.down("md")]: {
            fontSize: "3rem",
        }
    },
    subheading: {
        fontFamily: "'Dosis', sans-serif",
        fontSize: "1.5rem",
    }
   

}))

export default () => {
    const classes = useStyles();
    return <>
        <Box className={classes.image}>
            <Typography className={classes.heading}>
                Archive
            </Typography>
            <Typography className={classes.subheading}>
                Our story
            </Typography>
        </Box>
        
        <Navigate></Navigate>
        <Switch >
        <Route exact path="/archive" component={Moments} />
        <Route exact path="/archive/contests" component={Contests} />
        </Switch>
    </>
}