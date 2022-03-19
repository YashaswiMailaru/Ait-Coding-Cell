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
        fontSize: "1.5em",
        margin: "0 20px",
        paddingBottom: "5px",
        '&:active': {
            color: "black",
            borderBottom: "1px solid #17a2b8",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "15px",
        }
    },
    active: {
        color: "black",
        borderBottom: "1px solid #17a2b8",
    }


}));

export default () => {
    const classes = useStyles();
    return <>
        <Box className={classes.conatiner}>
            <NavLink
                exact to="/about"
                activeClassName={classes.active}
                className={classes.link}
            >Events</NavLink>
            <NavLink
                exact to="/about/members"
                activeClassName={classes.active}
                className={classes.link}
            >Members</NavLink>
            <NavLink
                exact to="/about/contributors"
                activeClassName={classes.active}
                className={classes.link}
            >Contributors</NavLink>
        </Box>
    </>
}