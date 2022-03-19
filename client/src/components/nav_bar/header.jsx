import React from "react";
import {useHistory} from "react-router-dom";
import "./header.css";

export default function Header(){

    const history = useHistory();

    const handleClick = () => {
        return history.push("/auth");
    }

    return <div className = "container">
            <div className = "logo-block">
                <p className = "logo">ait programming club</p>
            </div>
            <div className = "user-block" onClick = {handleClick}>
                <button className = "sign-in">New User / Login</button>
            </div>
    </div>
}