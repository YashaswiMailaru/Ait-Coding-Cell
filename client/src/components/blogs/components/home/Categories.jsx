import React, { useContext } from "react";
import { Button, makeStyles, Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Link } from "react-router-dom";
import table_value from "./Categories_value";
import { AuthContext } from "../../../user_auth/Auth";


const useStyles = makeStyles({
    create: {
        margin: 20,
        background: "blue",
        color: "white",
        width: "80%",
    },
    table: {
        border: "1px solid rgba(224,224,224,1)",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    }
});


const Categories = () => {

    const classes = useStyles();
    const user = useContext(AuthContext);

    return (
        <>

            {user.currentUser && 
                <Link to={"/blogs/create"} className={classes.link}>
                    <Button varient="contained" className={classes.create}>Create Blog</Button>
                </Link>
            }


            <Table className={classes.table}>
                <TableBody>
                    {
                        table_value.map(ele => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/blogs/?category=${ele}`} className={classes.link} >
                                        {ele}
                                    </Link>

                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;