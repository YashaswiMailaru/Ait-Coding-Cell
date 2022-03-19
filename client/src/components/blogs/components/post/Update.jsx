import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, FormControl, InputBase, List, ListItem, ListItemText, makeStyles, Menu, MenuItem, TextareaAutosize, TextField } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import table_value from "../home/Categories_value";
import { getPosts, updatePost } from "../../service/api";
import { Add } from "@material-ui/icons";
import { AuthContext } from "../../../user_auth/Auth";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "0 100px",
        [theme.breakpoints.down("md")]: {
            padding: "0 10px",
        }
    },
    image: {
        width: "100%",
        height: "50vh",
        objectFit: "cover",
    },
    form: {
        margin: "10px 0",
        display: "flex",
        flexDirection: "row",
    },
    title: {
        flex: 1,
        margin: "0 20px",
        fontSize: 25,
    },
    publish: {
        background: "blue",
        color: "white",
    },
    textarea: {
        width: "100%",
    }
}))
const initialValues = {
    title: "",
    body: "",
    picture: "",
    username: "Sayan",
    catagories: "All",
    createdDate: new Date()
}
const Updateblog = ({ match }) => {
    const user = useContext(AuthContext);
    console.log(user);


    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    const classes = useStyles();
    const [post, setPost] = useState(initialValues);
    const history = useHistory();

    useEffect(() => {

        const fetchData = async () => {
            let data = await getPosts(match.params.id);
            setPost(data);
            // console.log(data);
        }
        fetchData();
    }, [match.params.id]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    const update = async () => {
        await updatePost(match.params.id, post);
        history.push(`/blogs/view/${match.params.id}`);
    }
    // ----------- category --------------
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setPost({ ...post, categories: table_value[index] });
        console.log(post);
        setAnchorEl(null);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // ---------------------------
    //--------------image--------------
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState("");

    const handleimgClickOpen = () => {
        setOpen(true);
    };

    const handleimgClose = () => {
        console.log(post);
        setImg(post.picture);
        setOpen(false);
    };
    const handleimgdelete = () => {
        setPost({ ...post, picture: "" });
        setOpen(false);
    };


    //----------------------------------

    return (
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture} onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="post" />
            <FormControl className={classes.form}>



                <div>
                    <Button onClick={handleimgClickOpen}>
                        <Fab color="primary" aria-label="add">
                            <Add />
                        </Fab>
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

                <InputBase
                    onChange={(e) => handleChange(e)}
                    placeholder="Title" className={classes.title}
                    name="title"
                />

                <Button onClick={() => update()} varient="contained" className={classes.publish} > Update </Button>
            </FormControl>
            {/* -----------------Category-------------------- */}
            <Box>
                <List component="nav" aria-label="Device settings">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        onClick={handleClickListItem}
                    >
                        <ListItemText primary="Category" secondary={table_value[selectedIndex]} />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {table_value.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            {/* --------------------------------------------- */}
            <TextareaAutosize
                rowsMin={5}
                placeholder="Details of your blog"
                className={classes.textarea}
                onChange={(e) => handleChange(e)}
                name="body"
                value={post.body}
            />


        </Box>

    )
}
export default Updateblog;