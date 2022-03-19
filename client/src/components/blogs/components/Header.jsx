
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    navbar: {
        background: "white",
        color: "black",
    },
    elements: {
        display: "flex",
        justifyContent:"center",
        '& > *':{
            padding: "20px" 
        }
    },
    link:{
        textDecoration:"none",
        color :"inherit",
    }
})
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.navbar}>
            <Toolbar className={classes.elements}>
               <Link to = {"/"} className={classes.link}> <Typography>Home</Typography> </Link>
                
                <Typography>Blogs</Typography>
                <Typography>About</Typography>
                <Typography>LognIn</Typography>

            </Toolbar>
        </AppBar>
    )
}

export default Header;