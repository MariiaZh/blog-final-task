import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../store/index';

import dummy_posts from "../../models/dummy_posts";
import useStyles from "./styles/UserScreenStyles";

import UserMenu from "./components/UserMenu";
import UserArticleCard from "./components/UserArticleCard";
import SideBar from "../../components/SideBar/SideBar";

const UserScreen: React.FC = () => {
    const classes = useStyles();
    const currentUser = useSelector((state: RootState) => state.userAuth.user);
    const usersPosts = dummy_posts.filter(post => post.authorId === currentUser.userId);

    return (
        <div className={classes.root} >
            <UserMenu />
            <div className={classes.articlesList}>
                {usersPosts.map(post => {
                    return (<UserArticleCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        likes={post.likes}
                        image={post.image}
                        date={post.date}
                        comments={post.comments}
                    />)
                }
                )}
            </div>
            <SideBar />
        </div>
    )
}

export default UserScreen;