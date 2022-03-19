import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

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
    content : {
        marginTop: "20px",
        marginLeft: "20px",
        fontSize: "16px",
        textAlign: "left",
        letterSpacing: "0",
        color: "#4a4a4a",
        opacity: "1",
        fontWeight: "400",
        lineHeight: "28px",
    },
    image : {
        width: "700px",
        height: "380px",
        [theme.breakpoints.down("md")]: {
            display: "block",
            width: "150px",
            height: "120px",
            margin: "auto",
        }
        
    },
}));

export default () => {

    const classes = useStyles();
    return <>
        <Box className = {classes.main}>
            <img className = {classes.image} src = "https://i.ibb.co/f18zfqn/Businessman-holds-a-cup-on-top-of-column-graph-Key-to-success-and-success-story-business-chance-on-t.jpg"></img>
            <Typography className = {classes.content}>You could be a student looking to master competitive programming. You could be a competitive programming beginner. You could be a professional. You could be a fresh graduate looking for a job, a seasoned professional looking for a switch to a top product company, or someone aiming to learn competitive programming and make it big at the ICPC or IOI. Whoever you are, as long as you want to get to the next milestone of your programming journey, you’re at the right place</Typography>
        </Box>

    </>
}