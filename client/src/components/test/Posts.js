import React, { createRef, useState } from "react";
import {useHistory} from "react-router-dom";



export default(props) => {
    
    return <div>
        {props.title}
        <br></br>
        {props.description}
        <br></br>
        {props.username}
        <br></br>
        {props.picture}
        <br></br>
        {props.categories}
        <br></br>
        {props.createdDate}
        <br></br>
    </div>
}