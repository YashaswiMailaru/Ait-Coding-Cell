import React, {useState} from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "./Config";
import "./user-auth.css"

export default function ForgetPassword(){

    function handleSubmit(e){

        e.preventDefault();
        const { email, password } = e.target.elements;
        firebaseConfig.auth().sendPasswordResetEmail(email.value).then(() => {
            window.alert("check you email to reset password");
        })
        .catch((error) => {
            window.alert(error.code);
        });
    
    }

    return <>

        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="formField"   id = "last-row">
            <button className="formFieldButton">send password reset mail</button>{" "}
            <Link to="/auth" className="formFieldLink">
              Sign In
            </Link>
          </div>
        </form>
    </>
}