
import { Box, makeStyles,Typography } from "@material-ui/core";
var background = "https://i.ibb.co/3sxqSYy/People-communicating-via-social-media-flat-vector-illustration-Business-team-using-mobile-phones-lap.jpg";
const useStyles = makeStyles((theme) => ({
    image: {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${background})repeat-x #fff`,
        height: "60vh",
        width: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundSize: "100%",
        backgroundPosition: "50% 70%",
        [theme.breakpoints.down("md")]: {
            height: "30vh",
        }
    },
    heading: {
        fontFamily: "'Dosis', sans-serif",
        fontSize: "5rem",
        padding: "10px 0",
        [theme.breakpoints.down("md")]: {
            fontSize: "3rem",
        }
    },
    subheading: {
        fontFamily: "'Dosis', sans-serif",
        fontSize: "1.5rem",
    },

}));
const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography className={classes.heading}>
                Blogs
            </Typography>
            <Typography className={classes.subheading}>
                bla bla
            </Typography>
        </Box>
    )
}

export default Banner;