import React from "react";
import { Route, Switch } from "react-router";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Navigate from "./Navigate";
import Members from "./Members";
import Contributors from "./Contributors";
import Events from "./Events";

const Background = "https://i.ibb.co/0Z4jQ9R/2681558.jpg";
const useStyles = makeStyles((theme) => ({
    main : {
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]: {
            display: "block",
        }
    },
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
    },
}));

export default () => {
    const classes = useStyles();
    return <>
        <Box className={classes.image}>
            <Typography className={classes.heading}>
                About
            </Typography>
            <Typography className={classes.subheading}>
                bla bla
            </Typography>
        </Box>
        <Navigate></Navigate>
        <Switch >
            <Route exact path="/about" component={Events} />
            <Route exact path="/about/members" component={Members} />
            <Route exact path="/about/contributors" component={Contributors} />
        </Switch>
    </>
}