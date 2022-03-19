import React from "react";
import {isMobile} from "react-device-detect";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideNavBar from "./nav_bar/SideNavBar";
import TopNavBar from "./nav_bar/TopNavBar";
import Home from "./home/Home";
import About from "./about/About";
import Archieve from "./archieve/Archieve";
import Blog from "./blogs/Blog"
import { AuthProvider } from "./user_auth/Auth";
import LeaderBoard from "./LeaderBoard/index";
import Header from "./nav_bar/header";
import ViewProfile from "./profile/ViewProfile";
import SetProfile from "./profile/SetProfile";
import Footer from "./footer";
import SignIn from "./user_auth/index";

function App(){
    return <AuthProvider>
        <Router>
            {isMobile ? (<SideNavBar></SideNavBar>) : (<TopNavBar></TopNavBar>)}
            <Route path = "/" exact component = {Home}></Route>
            <Route path = "/about" component = {About}></Route>
            <Route path = "/archive" component = {Archieve}></Route>
            <Route path = "/leaderboard" component = {LeaderBoard}></Route>
            <Route path = "/blogs" component = {Blog}></Route>
            <Route path = "/auth" component = {SignIn}></Route>
            <Route path = "/viewprofile" component = {ViewProfile}></Route>
            <Route path = "/setprofile" component = {SetProfile}></Route>
        </Router>
    </AuthProvider> 
}

export default App;
