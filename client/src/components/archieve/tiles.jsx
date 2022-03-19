import React from "react";
import styles from "./tiles.css";

const url = "https://i.pinimg.com/originals/cc/16/77/cc167732d9d40ea6b29183c45b6ced39.jpg";
export default (props) => {
    console.log(props);
    const cutString = (str) => {
        var limit = 12;
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }
    return <div className="tile">
        <img src={props.image} style={{
            height: "65%",
            objectFit: "cover",
        }} onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="post"  />
        <div className="text">
            {(props.type === 1) &&
                <p className="animate-text">
                    Winners
                    <br></br>
                    Te-Be : {cutString(props.winnerTeBe)}
                    <br></br>
                    Fe-Se : {cutString(props.winnerFeSe)}
                    <br></br>
                    Runner-Up
                    <br></br>
                    Te-Be : {cutString(props.runupTeBe)}
                    <br></br>
                    Fe-Se : {cutString(props.runupFeSe)}
                </p>
            }
            {(props.type === 2) &&
                <p className="animate-text">
                    Winners
                    <br></br>
                    First  : {cutString(props.winnerTeBe)}
                    <br></br>
                    Second : {cutString(props.winnerFeSe)}
                </p>
            }


        </div>
        <div style={{
            position: "absolute",
            top: "70%",
            left: "30px",
        }}>
            <h1>{props.heading}</h1>
            <a href={props.link} style={{
                textDecoration: 'none',
                color: "white",
            }}>Link</a>
        </div>
    </div >
}