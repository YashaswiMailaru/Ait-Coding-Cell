import { makeStyles,Box, Typography  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container:{
        width:"100%",
        backgroundColor:"#313131",
        height:"50px",
        marginTop:"100px",
        display:"flex",

    }
}));
export default () => {
    const classes = useStyles();
    return <>
    <Box className={classes.container}>
        
    </Box>
    </>
}