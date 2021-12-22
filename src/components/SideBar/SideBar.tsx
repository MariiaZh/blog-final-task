import { Typography } from "@mui/material";
import ShortCard from "./components/ShortCard";
import useStyles from "./styles/SideBarStyles";

import { useSelector } from "react-redux";
import { RootState } from "../../store";


const SideBar = () => {
    const classes = useStyles();
    const articlesArray = useSelector((state: RootState) => state.articlesWorker.articlesList)


    return (
        <div className={classes.sidebar}>
            <Typography variant="h5" component="p" className={classes.sidebarTitle} >Recommended Reading</Typography>
            {articlesArray.map(post => {
               
                let postText = '';
                if (post.text.length > 100) {
                    postText = post.text.slice(0, 100);
                }
                return < ShortCard
                    key={post.articleId}
                    {...post}
                    text={postText}

                />
            })}
        </div>
    )
}

export default SideBar;