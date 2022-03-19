import React from "react";
import Tiles from "./tiles.jsx";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllcontest } from "./archive_api.js";


function createObjects(props) {
    return <Tiles
        key={props.key}
        heading={props.heading}
        winnerFeSe={props.winnerFeSe}
        winnerTeBe={props.winnerTeBe}
        link={props.link}
        image={props.img}
        runupFeSe={props.runupFeSe}
        type={props.type}
        runupTeBe={props.runupTeBe}
    />
}
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
    contest: {
        margin: "0 5%",
        [theme.breakpoints.down("md")]: {
            margin: "0",
        }
    },
    grey: {
        borderStyle: "dotted",
        borderWidth: "8px 0 0 0",
        width: "10%",
        borderColor: "#43454e",
    }


}))

export default () => {
    const classes = useStyles();
    const [data, setdata] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchData = async () => {
            let dat = await getAllcontest(search);
            console.log(dat);
            setdata(dat);
        }
        fetchData();
    }, [search]);

    return <>
        <Box >
            <Typography className={classes.moments}>
                Contests
            </Typography>
            <Box className={classes.contest}>
                {(data) && data.map(createObjects)}
            </Box>

        </Box>

    </>
}