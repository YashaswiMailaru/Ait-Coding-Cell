import { Box, Grid } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import Post from "./Post";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../service/api";

const Pposts = () => {
    const [posts, setPosts] = useState([]);

    const { search } = useLocation();
    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts(search);
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [search]);
    
    return (
        <>

            {
                posts && posts.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blogs/view/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
                    No data is available for selected category
                </Box>
            }

        </>
    )
}

export default Pposts;