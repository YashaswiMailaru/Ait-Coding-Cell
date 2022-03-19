import React from "react";
import Gallary from "./Gallary";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    moments: {
        fontFamily: "'Dosis', sans-serif",
        fontSize: "5rem",

        display: "flex",
        justifyContent: "center",
        margin: "5% 0",
        [theme.breakpoints.down("md")]: {
            fontSize: "3rem",
        }
    },
    gallary: {
        margin: "0 0 16% 0",
        [theme.breakpoints.down("md")]: {
            margin: "0 0 13% 0",
        }
    }
}))

export default () => {
    const classes = useStyles();
    return <>
        <Typography className={classes.moments}>
            Moments
        </Typography>
        <Box className={classes.gallary}>
            <Gallary />
        </Box>
    
    </>
}