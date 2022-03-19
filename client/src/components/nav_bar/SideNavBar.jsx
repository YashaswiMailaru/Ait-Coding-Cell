import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "./side-nav-bar.css";

function SideNavBar(){

    const [currState, changeCurrState] = useState("0px");

    function changeState(){
        if(currState == "250px")
            changeCurrState("0px");
        else
            changeCurrState("250px")
    }

    const history = useHistory();
    function handleClick(){
        history.push("./signup");
    }

    return <React.Fragment>

        <div className = "side-top">
            <div className = "hamburger-btn" onClick = {changeState}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className = "side-nav-bar" style = {{width : currState}}>
            <p onClick = {handleClick}>Hello, Sign in!!</p>
            <Link href = "#about" to = '/'>Home</Link>
            <Link to='/leaderboard'>Leaderboard</Link>
            <Link href = "#archieve" to = '/archieve'>Archieve</Link>
            <Link href = "#doubt" to = '/doubt'>Doubt</Link>
            <Link href = "#about" to = '/about'>About</Link>
        </div>
    </React.Fragment>;   
}

export default SideNavBar;