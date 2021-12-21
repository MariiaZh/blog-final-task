import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../store/index';
import Article, { Comment } from "../../models/Article";

import useStyles from "./styles/UserScreenStyles";

import UserMenu from "./components/UserMenu";
import UserArticleCard from "./components/UserArticleCard";
import SideBar from "../../components/SideBar/SideBar";
import NewArticle from "./components/NewArticle";

const UserScreen: React.FC = () => {

    const classes = useStyles();
    const currentUser = useSelector((state: RootState) => state.userAuth.user);
    const isNewArticle: boolean = useSelector((state: RootState) => state.articlesWorker.isArticleAdding);
    const allPosts = useSelector((state: RootState) => state.articlesWorker.articlesList);
    const commentsList = useSelector((state: RootState) => state.articlesWorker.commentsList);

    let userPosts: Article[] = [];
    let comments: Comment[] = [];
    
        userPosts = allPosts.filter(post => post.authorIdKey === currentUser.userId);
        comments = commentsList.filter(comment => {
            const isCommentFound = userPosts.find(post => post.articleId === comment.articleIdKey);
            if (isCommentFound) {
                return true;
            } else {
                return false;
            }
        });

    return (
        <Fragment>
            {isNewArticle ? (<NewArticle />)
                : (<div className={classes.root} >
                    <UserMenu />
                    <div className={classes.articlesList}>
                        {userPosts.map(post => {
                            return (<UserArticleCard
                                key={post.articleId}
                                {...post}
                                comments={comments}
                            />)
                        }
                        )}
                    </div>
                    <SideBar />
                </div >)
            }
        </Fragment>
    )
}

export default UserScreen;