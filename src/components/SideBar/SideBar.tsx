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
                const shorttext = post.text.split('.');
                return < ShortCard
                    key={post.articleId}
                    {...post}
                    text={shorttext[0].toString() + '...'}
                />
            })}
        </div>
    )
}

export default SideBar;