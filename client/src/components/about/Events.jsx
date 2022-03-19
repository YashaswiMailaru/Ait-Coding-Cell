import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Navigate from "./Navigate";
import Crack from "./Crack";
import Codeft from "./Codeft";
import Classes from "./Classes";


const useStyles = makeStyles((theme) => ({
    
    header: {
        fontFamily: "'Dosis', sans-serif",
        fontSize: "80px",
        display: "flex",
        justifyContent: "center",
        margin: "5% 0",
        [theme.breakpoints.down("md")]: {
            fontSize: "30px",
        }
    },
   

}));

export default () => {
    const classes = useStyles();
    return <>
        <Typography className={classes.header}>
            Crack
        </Typography>
        <Crack></Crack>
        <Typography className={classes.header}>
            Codeft
        </Typography>
        <Codeft></Codeft>
        <Typography className={classes.header}>
            Enrichment classes
        </Typography>
        <Classes></Classes>
    </>
}