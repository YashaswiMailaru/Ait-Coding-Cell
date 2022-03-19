import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "./Config";
import { Link } from "react-router-dom";

function verifyEmailFormat(email){
  const format = "@aitpune.edu.in";
  var given = "";
  for(var i = 0; i < email.length; i++){
    if(email[i] == '@'){
      console.log(i);
      for(var j = i; j < email.length; j++){
        given += email[j];
      }
      break;
    }
  }
  console.log(given);
  return (given === format);
}

const SignUp = () => {

  function handleSubmit(e){
    e.preventDefault();
    const { email, password, name} = e.target.elements;

    if(!verifyEmailFormat(email.value)){
      alert('email should be in format "..@aitpune.edu.in"');
      return;
    }

    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value).then((userCredential) => { 
        
        userCredential.user.sendEmailVerification().then(function() {
          window.alert("Verification link sent to your email. Kinldy check to verify your account");
        }).catch(function(error){
        });
        
        firebaseConfig.firestore().collection('users').doc(userCredential.user.uid).set({
          cf: "",
          name: name.value,
          codechef: "",
          number: 0,
          hackerrank: "",
          branch: "",
          year: "",
          reg_num: "",
          is_admin: false,
          websiteurl: "",
          github: "",
          instagram: "",
          facebook: "",
          intro1: "",
          intro2: "",
          img_url: "https://bootdey.com/img/Content/avatar/avatar7.png", 
          email: email.value,
          
        });
      
      })     
    } catch (error) {
      alert(error);
    }
  };

  const handleLogOut = () => {
    firebaseConfig.auth().signOut()
  }
  
  return (
    <>
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Full Name 
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter username"
              name="username"
            />
          </div>
        
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

          <div className="formField"  id = "last-row">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/auth" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>

    </>

    
  );
};

export default SignUp;