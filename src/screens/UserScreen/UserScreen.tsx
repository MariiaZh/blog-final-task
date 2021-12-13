import React from "react";
import dummy_posts from "../../models/dummy_posts";
import dummy_users from '../../models/dummy_users';
import useStyles from "./styles/UserScreenStyles";

import UserMenu from "./components/UserMenu";
import UserArticleCard from "./components/UserArticleCard";
import SideBar from "../../components/SideBar/SideBar";

const currentUser = dummy_users[0];
const usersPosts = dummy_posts.filter(post => post.authorId === currentUser.userId);

const UserScreen: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <UserMenu />
            <div style={{ width: "58%" }}>
                {usersPosts.map(post => {
                    return (<UserArticleCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        likes={post.likes}
                        image={post.image}
                        author={currentUser.nickName}
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