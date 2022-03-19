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
    image2 : {
        width: "550px",
        height: "400px",
        [theme.breakpoints.down("md")]: {
            width: "80px",
            height: "70px",
            display: "none",
        }
        
    },
    image1 : {
        width: "150px",
        height: "120px",
        display: "none",
        [theme.breakpoints.down("md")]: {
            margin: "auto",
            display: "block",
        }
    }
}));

export default () => {

    const classes = useStyles();
    return <>
        <Box className = {classes.main}>
            <img className = {classes.image1} src = "https://i.ibb.co/wJnMHgN/4905784.jpg"></img>
            <Typography className = {classes.content}>You could be a student looking to master competitive programming. You could be a competitive programming beginner. You could be a professional. You could be a fresh graduate looking for a job, a seasoned professional looking for a switch to a top product company, or someone aiming to learn competitive programming and make it big at the ICPC or IOI. Whoever you are, as long as you want to get to the next milestone of your programming journey, you’re at the right place</Typography>
            <img className = {classes.image2} src = "https://i.ibb.co/wJnMHgN/4905784.jpg"></img>
        </Box>

    </>
}