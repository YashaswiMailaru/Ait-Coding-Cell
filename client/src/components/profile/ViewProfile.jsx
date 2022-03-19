import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebaseConfig from '../user_auth/Config';
import { AuthContext } from '../user_auth/Auth';
import "./view-profile.css";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",

    '&:hover': {
    
      textDecoration: "none",
    }
  }
}));
export default () => {
  const classes = useStyles();
  const user = useContext(AuthContext);
  
  var url = "https://bootdey.com/img/Content/avatar/avatar7.png";
  const [profile, setProfile] = useState({
    cf: "",
    name: "",
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
    img_url: url,
  })

  const cutString = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
  }

  useEffect(() => {
    if(user.profile)
      setProfile(user.profile);
  }, [])

  return <div className="container">
    <div className="main-body">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src={profile.img_url} onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="Admin" className="rounded-circle" width={150} />
                <div className="mt-3">
                  <h4>{profile.name}</h4>
                  <p className="text-secondary mb-1">{profile.intro1}</p>
                  <p className="text-muted font-size-sm">{profile.intro2}</p>
                  {(user) && (user.currentUser) && 
                    <Link to={`/blogs/?ID=${user.currentUser.uid}`} className={classes.link}>
                    <button className="btn btn-outline-primary">My Blogs</button>
                  </Link>
                  }
                  
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <a href={profile.websiteurl} className={classes.link} target="_blank" >
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
                  <span className="text-secondary">{cutString(profile.websiteurl, 22)}</span>
                </li>
              </a>
              <a href={profile.github} className={classes.link} target="_blank">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
                  <span className="text-secondary">{cutString(profile.github, 22)}</span>
                </li>
              </a>

              <a href={profile.github} className={classes.link} target="_blank">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
                  <span className="text-secondary">{cutString(profile.github, 22)}</span>
                </li>
              </a>

              <a href={profile.facebook} className={classes.link} target="_blank">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                  <span className="text-secondary">{cutString(profile.facebook, 22)}</span>
                </li>
              </a>

            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.name}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.email}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Reg No.</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.reg_num}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.number}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Year</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.year}
                </div>
              </div>

              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Branch</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.branch}
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">CodeForces Handle</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.cf}
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">CodeChef Handle</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.codechef}
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">HackerRank Handle</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {profile.hackerrank}
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-12">
                  <Link className="btn btn-info " to = "/setprofile">Edit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}