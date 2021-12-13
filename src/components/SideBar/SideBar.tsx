import React from "react";
import { Typography } from "@mui/material";
import ShortCard from "./components/ShortCard";
import useStyles from "./styles/SideBarStyles";
import dummy_posts from "../../models/dummy_posts";

const SideBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <Typography variant="h5" component="p" className={classes.sidebarTitle} >Recommended Reading</Typography>
            {dummy_posts.map(post => {
                const shorttext = post.text.split('.');
                return < ShortCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    text={shorttext[0].toString() + '...'} />
            })}
        </div>
    )
}

export default SideBar;