import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import photo from "../images/home.png";
const useStyles = makeStyles((theme) => ({
  bg:{
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${photo})`,
    backgroundSize: "100%",
    backgroundPosition: "50% 70%",
    backgroundRepeat: "no-repeat",
  },
  vector:{
    width: "72%",
    height: "75%",
  },
  text:{
    paddingTop:"12%",
    paddingLeft:"2%",
  },
  ait:{
    fontSize:"1.25em",
  
  },
  coding:{
    fontFamily: "'Dosis', sans-serif",
    fontSize:"4em",
  }

}));

export default () => {
  const classes = useStyles();
  return <>
    <Box className={classes.bg}>
      <Box className = {classes.text}>
      <Typography className={classes.ait}>Army Institute Of Technology</Typography>
      <Typography className={classes.coding}>Coding Cell</Typography>
      
      </Box>
    </Box>
  </>
}

