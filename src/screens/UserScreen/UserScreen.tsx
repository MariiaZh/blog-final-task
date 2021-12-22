import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store/index';
import Article, { Comment } from "../../models/Article";
import { patchRequest } from "../../api/patchRequest";
import { articlesWorkerActions } from "../../store/articlesWorker";

import useStyles from "./styles/UserScreenStyles";

import UserMenu from "./components/UserMenu";
import UserArticleCard from "./components/UserArticleCard";
import SideBar from "../../components/SideBar/SideBar";
import NewArticle from "./components/NewArticle";

const UserScreen: React.FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const currentUser = useSelector((state: RootState) => state.userAuth.user);
    const isNewArticle: boolean = useSelector((state: RootState) => state.articlesWorker.isArticleAdding);
    const allPosts = useSelector((state: RootState) => state.articlesWorker.articlesList);
    const commentsList = useSelector((state: RootState) => state.articlesWorker.commentsList);

    const postArticleAnswer = useSelector((state: RootState) => state.postRequestWorker.postArticleAnswer);
    const patchArticleAnswer = useSelector((state: RootState) => state.postRequestWorker.patchArticleAnswer);

    const [newPostId, setNewPostId] = useState('');
    const [newPatchId, setNewPatchId] = useState('');

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

    useEffect(() => {
        if (postArticleAnswer !== newPostId) {
            dispatch(patchRequest({
                dataType: "articles",
                id: postArticleAnswer,
                keyData: 'articleId'
            }));
            setNewPostId(postArticleAnswer);
        }
    }, [postArticleAnswer, dispatch, newPostId])

    useEffect(() => {
        if (patchArticleAnswer !== newPatchId) {
            dispatch(articlesWorkerActions.updateList('articles'));
            setNewPatchId(patchArticleAnswer);
        }
    }, [patchArticleAnswer, dispatch, newPatchId])

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