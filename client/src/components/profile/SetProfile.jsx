import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./view-profile.css";
import { AuthContext } from '../user_auth/Auth';
import {
  Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize, List,
  Menu, MenuItem, ListItem, ListItemText, Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import firebaseConfig from "../user_auth/Config";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  rooot: {
    backgroundColor: "theme.palette.background.paper",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
    color: "#495057",
    width: "",
  },
  box: {
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    '&:hover': {
      textDecoration: "none",
    }
  },
  url_btn: {
    backgroundColor: "007bff",
    boxShadow: "unset",
    margin: "10px",

  }
}));

const options = [
  'FE',
  'SE',
  'TE',
  'BE',
];

const branchs = [
  'Comp',
  'IT',
  'ENTC',
  'MECH',
];

export default () => {

  const user = useContext(AuthContext);
  var url = "https://bootdey.com/img/Content/avatar/avatar7.png";
  const history = useHistory();

  const profile = user.profile;




  //--------------image--------------
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(url);

  const handleimgClickOpen = () => {
    setOpen(true);
  };

  const handleimgClose = () => {
    setOpen(false);
  };
  const handleimgdelete = () => {
    setImg(url);
    setOpen(false);
  };
  const handleChange = (e) => {
    setImg(e.target.value);
  };


  //------------Year----------------------

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(options[0]);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(options[index]);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //--------------------------------------

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [selectedIndex1, setSelectedIndex1] = React.useState(0);

  const handleClickListItem1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMenuItemClick1 = (event, index) => {
    setSelectedIndex1(index);
    setAnchorEl1(null);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  //--------------------------------------
  const handlesubmit = async (e) => {

    e.preventDefault();

    const { cf, email, name, codechef, hackerrank, reg_num, website, facebook, instagram, github, intro1, intro2, number} = e.target.elements;


    await firebaseConfig.firestore().collection("users").doc(user.currentUser.uid).update({
      cf: cf.value,
      email: email.value,
      name: name.value,
      codechef: codechef.value,
      hackerrank: hackerrank.value,
      branch: branchs[selectedIndex1],
      year: selectedIndex,
      reg_num: reg_num.value,
      websiteurl: website.value,
      facebook: facebook.value,
      instagram: instagram.value,
      github: github.value,
      intro1: intro1.value,
      intro2: intro2.value,
      img_url: img,
      number: number.value,
    });

    history.push("/viewprofile");


  }

  console.log(profile);

  const cutString = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
  }
  return <div className="container">

    <form onSubmit={handlesubmit}>
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={img} onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="Admin" className="rounded-circle p-1" width={110} />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                    {/* <p className="text-secondary mb-1">Full Stack Developer</p> */}
                    <input id="intro1" type="text" className="form-control" defaultValue="Full Stack Developer" style={{ marginBottom: "10px" }} />
                    <input id="intro2" type="text" className="form-control" defaultValue="BHOSDI PUNE, Maharashtra" />
                    {/* <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                    {/* -------------------------------------------------- */}
                    <div>
                      <Button onClick={handleimgClickOpen} className={classes.url_btn}>
                        <Add />
                      </Button>
                      <Dialog open={open} onClose={handleimgClose}>
                        <DialogTitle>Give the URL for the img</DialogTitle>
                        <DialogContent>
                          <TextField id="outlined-basic"
                            label="URL"
                            name="picture"
                            onChange={(e) => handleChange(e)}
                            variant="outlined" />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleimgdelete} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={handleimgClose} color="primary">
                            Ok
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                    {/* --------------------------------------------------- */}

                    <Link to={`/blogs/?ID=${user.currentUser.uid}`} className={classes.link}>
                      <button className="btn btn-outline-primary">My Blogs</button>
                    </Link>


                  </div>
                </div>
                <hr className="my-4" />
                <ul className="list-group list-group-flush">
                  <a href={profile.websiteurl} className={classes.link} target="_blank">
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
          </div>

          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="name" type="text" className="form-control" defaultValue={profile.name} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="email" type="text" disabled className="form-control" defaultValue={profile.email} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Reg No.</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="reg_num" type="text" className="form-control" defaultValue={profile.reg_num} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Contact</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="number" type="text" className="form-control" defaultValue={profile.number} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Year</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {/* --------------year----------------------------- */}
                    <div className={classes.rooot}>
                      <List className={classes.box} component="nav" aria-label="Device settings">
                        <ListItem
                          button
                          aria-haspopup="true"
                          aria-controls="lock-menu"
                          aria-label="when device is locked"
                          onClick={handleClickListItem}
                        >
                          <ListItemText secondary={selectedIndex} />
                        </ListItem>
                      </List>
                      <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className={classes.box}
                      >
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}

                            selected={options[index] === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>

                    {/* ------------------------------------------- */}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Branch</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {/* --------------Branch----------------------------- */}
                    <div className={classes.rooot}>
                      <List className={classes.box} component="nav" aria-label="Device settings">
                        <ListItem
                          button
                          aria-haspopup="true"
                          aria-controls="lock-menu"
                          aria-label="when device is locked"
                          onClick={handleClickListItem1}
                        >
                          <ListItemText secondary={branchs[selectedIndex1]} />
                        </ListItem>
                      </List>
                      <Menu
                        id="lock-menu"
                        anchorEl={anchorEl1}
                        keepMounted
                        open={Boolean(anchorEl1)}
                        onClose={handleClose1}
                        className={classes.box}
                      >
                        {branchs.map((branchs, index) => (
                          <MenuItem
                            key={branchs}
                            selected={index === selectedIndex1}
                            onClick={(event) => handleMenuItemClick1(event, index)}
                          >
                            {branchs}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>

                    {/* ------------------------------------------- */}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">CodeForces Handle</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="cf" type="text" className="form-control" defaultValue={profile.cf} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">CodeChef Handle</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="codechef" type="text" className="form-control" defaultValue={profile.codechef} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">HackerRank Handle</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="hackerrank" type="text" className="form-control" defaultValue={profile.hackerrank} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">website</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="website" type="text" className="form-control" defaultValue={profile.websiteurl} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">github</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="github" type="text" className="form-control" defaultValue={profile.github} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">instagram</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="instagram" type="text" className="form-control" defaultValue={profile.instagram} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">facebook</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input id="facebook" type="text" className="form-control" defaultValue={profile.facebook} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-9 text-secondary">
                    <input type="submit" className="btn btn-primary px-4" defaultValue="Save Changes" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
}