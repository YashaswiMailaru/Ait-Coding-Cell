import React from "react";
import { NavLink } from "react-router-dom";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    conatiner: {
        display: "flex",
        justifyContent: "center",
        margin: "30px 0",
    },
    link: {
        color: "#707c8b",
        textDecoration: "none",
        fontSize: "1.7em",
        margin: "0 10px",
        paddingBottom: "5px",
        '&:active': {
            color: "black",
            borderBottom: "1px solid #17a2b8",

        }
    },
    active: {
        color: "black",
        borderBottom: "1px solid #17a2b8",
    }


}))
export default () => {
    const classes = useStyles();
    return <>
        <Box className={classes.conatiner}>
            <NavLink
                exact to="/archive"
                activeClassName={classes.active}
                className={classes.link}
            >Gallery</NavLink>
            <NavLink
                exact to="/archive/contests"
                activeClassName={classes.active}
                className={classes.link}
            >Contests</NavLink>
        </Box>
    </>
}