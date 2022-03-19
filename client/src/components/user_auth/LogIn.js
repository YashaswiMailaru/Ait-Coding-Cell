import React, { useContext } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "./Config";
import {useHistory} from "react-router-dom";
import { AuthContext } from '../user_auth/Auth';
import "./user-auth.css"

export default function LogIn({match}){

    const history = useHistory();
    const currentUser = useContext(AuthContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value).then((userCredential) => {
                if(userCredential.user.emailVerified){
                    return history.push("/viewprofile");
                }
                else{
                    var res = window.confirm("email not verified, resend verification link");
                    if(res){
                        userCredential.user.sendEmailVerification().then(function() {
                            window.alert("Verification link sent to your email. Kinldy check to verify your account");
                          }).catch(function(error){
                              alert(error.code);
                          });
                    }
                    firebaseConfig.auth().signOut();
                }
            }).catch((error) => {
                window.alert(error.code);
                console.log(error);
            });
        }
        catch (err){
            alert(err);
        }

    };

    return<>

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

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="formField"   id = "last-row">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/auth/reset-password" className="formFieldLink">
              forget password??
            </Link>
          </div>
        </form>

    </>

}
