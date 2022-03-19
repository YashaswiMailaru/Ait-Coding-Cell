import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getPosts, deleteBlog } from "../../service/api";
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
    icons: {
        float: "right",
        "& > *": {
            margin: 5,
        }

    },
    heading: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: "center",
        margin: "50px 0 10px 0",
    },
    subheading: {
        color: "#878787",
        display: "flex",
        margin: "0 0 20px 0",
        [theme.breakpoints.down("md")]: {
            display: "block",
        }
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    }

}))
const View = ({ match }) => {
    const user = useContext(AuthContext);
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    const [post, setPost] = useState({});
    const history = useHistory();
    const classes = useStyles();


    useEffect(() => {

        const fetchData = async () => {
            let data = await getPosts(match.params.id);
            setPost(data);
            // console.log(data);
        }
        fetchData();
    }, [match.params.id]);

    const handleDelete = async () => {
        await deleteBlog(post._id);
        history.push("/blogs");
    }
    console.log(post);
    
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture} onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="post" />
            {user && (user.currentUser.uid == post.ID) && 
                <Box className={classes.icons}>
                    <Link to={`/blogs/update/${post._id}`} ><Edit color="primary" /></Link>

                    <Delete
                        onClick={() => handleDelete()}
                        color="error" />
                </Box>
            }

            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                <Link to={`/blogs/?ID=${post.ID}`} className={classes.link}>
                    <Typography>Author : <span style={{ fontWeight: 600 }} >{post.username}</span></Typography>
                </Link>

                <Typography style={{ marginLeft: "auto" }}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>

            <Box style={{ margin: "20px 0" }}>{post.body}</Box>
        </Box>

    )
}
export default View;