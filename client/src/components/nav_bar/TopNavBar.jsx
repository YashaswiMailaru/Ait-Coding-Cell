import React, { useContext } from "react"
import {Link} from 'react-router-dom';
import "./top-nav-bar.css";
import { AuthContext } from "../user_auth/Auth";
import firebaseConfig from "../user_auth/Config";
import {useHistory} from "react-router-dom";

function TopNavBar(){

    const history = useHistory();

    const user = useContext(AuthContext);
    const logOut = () => {
        firebaseConfig.auth().signOut().then(() => {
            alert("successfully logout");
        });
        history.push("/");
    }

    return <>
        <div className = "top-nav-bar">
            {user.currentUser && <Link onClick = {logOut}>Signout</Link>}
            {user.currentUser && <Link to='/viewprofile'>My Profile</Link>}
            {!user.currentUser && <Link to='/auth'>Login</Link>}
            <Link to='/leaderboard'>Leaderboard</Link>
            <Link to = '/archive'>Archive</Link>
            <Link exact to = '/blogs'>Blogs</Link>
            <Link href = "/about" to = '/about'>About</Link>
            <Link href = "#about" to = '/'>Home</Link>
        </div>
    </>
}

export default TopNavBar