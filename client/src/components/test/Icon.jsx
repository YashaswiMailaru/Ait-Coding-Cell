import React from "react";
import fb from "../images/facebook.svg";
import cf from "../images/codeforces.svg";
import ln from "../images/linkedin.svg";
import gh from "../images/github.svg";
import gm from "../images/gmail.svg";

const style = {
    height : "12%",
    width : "12%",
    padding : "4%",
}

export default () => {
    return <div style = {{
            position: "absolute",
            width: "50%",
            zIndex: "1",
            marginLeft: "25%",
            marginTop: "112%",
        }}>
        <img src = {fb} style = {style}></img>
        <img src = {cf} style = {style}></img>
        <img src = {ln} style = {style}></img>
        <img src = {gh} style = {style}></img>
        <img src = {gm} style = {style}></img>
    </div> 
}