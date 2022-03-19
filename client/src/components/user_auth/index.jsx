import React from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn"
import ForgetPassword from "./ForgetPassword";

export default function SignIn(){

    return <Switch>
        <div className="App">
            <div className="appForm">
                <div className="pageSwitcher">
                    <NavLink
                        exact to="/auth"
                        className="pageSwitcherItem"
                        activeClassName="pageSwitcherItem-active"
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        exact to="/auth/sign-up"
                        activeClassName="pageSwitcherItem-active"
                        className="pageSwitcherItem"
                    >
                        Sign Up
                    </NavLink>
                </div>

                <div className="formTitle">
                    <NavLink
                        exact to="/auth"
                        activeClassName="formTitleLink-active"
                        className="formTitleLink"
                    >
                        Sign In
                    </NavLink>{" "}
                    or{" "}
                    <NavLink
                        exact to="/auth/sign-up"
                        activeClassName="formTitleLink-active"
                        className="formTitleLink"
                    >
                        Sign Up
                    </NavLink>
                </div>

                <Route exact path="/auth" component={LogIn} />
                <Route exact path="/auth/sign-up" component={SignUp} />
                <Route exact path="/auth/reset-password" component={ForgetPassword} />
            </div>
        </div>
    </Switch>
    
}