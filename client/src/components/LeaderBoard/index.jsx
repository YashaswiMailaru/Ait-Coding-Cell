import React from 'react';
import { getStanding, thisMonthContest } from './CFApiCall';
import standings from './standing';
import Table from './Table';
import { Box, makeStyles, Typography } from "@material-ui/core";
import CoderOfMonth from './CoderOfMonth';
import Navigate from './Navigate';
import { NavLink, Route, Switch } from "react-router-dom";

const Background = "https://i.ibb.co/zh4vXpt/Teamwork-and-team-success-concept-Best-employees-winning-cup-celebrating-victory-Flat-vector-illustr.jpg";
const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "60vh",
        backgroundSize: "100%",
        backgroundPosition: "50% 30%",
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
    },
   
    
}))

export default () => {
    const classes = useStyles();
    function handleSubmit(e){
        e.preventDefault();
        var date = new Date;
        standings(date);
    }

    return(
        <>
        <Box className={classes.image}>
            <Typography className={classes.heading}>
                Leaderboard
            </Typography>
            <Typography className={classes.subheading}>
                Live to compete 
            </Typography>
        </Box>

        <Navigate></Navigate>

        <Switch >
            <Route exact path="/leaderboard" component={Table} />
            <Route exact path="/leaderboard/topperformers" component={CoderOfMonth} />
        </Switch>
        </>
    );

};