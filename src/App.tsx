import React, { Fragment, useEffect } from "react";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { fetchData } from "./api/fetch_request";

import ArticlesScreen from './screens/ArticlesListScreen/ArticlesListScreen';
import FullArticleScreen from "./screens/FullArticleScreen/FullArticleScreen";
import UserScreen from './screens/UserScreen/UserScreen';
import AuthenticationScreen from './screens/AuthenticationScreen/AuthenticationScreen';

function App() {

    const dispatch = useDispatch();
    const isLogIn: boolean = useSelector((state: RootState) => state.userAuth.isLoginInSystem);

    const isUsersUpdate = useSelector((state: RootState) => state.articlesWorker.isUsersUpdate)
    const isArticlesUpdate = useSelector((state: RootState) => state.articlesWorker.isArticlesUpdate)
    const isCommentsUpdate = useSelector((state: RootState) => state.articlesWorker.isCommentsUpdate)

    useEffect(() => {
        if (isUsersUpdate) {
            dispatch(fetchData("users"));
        }
        if (isArticlesUpdate) {
            console.log(' articles!!!!:')
            dispatch(fetchData("articles"));
        }
        if (isCommentsUpdate) {
            dispatch(fetchData("comments"));
        }
    }, [dispatch, isUsersUpdate, isArticlesUpdate, isCommentsUpdate]);

    return (<Fragment>
        {
            isUsersUpdate || isArticlesUpdate || isCommentsUpdate ?
                <Container>Please, wait... getting data from the server...</Container>
                : (<Routes>
                    <Route path="/" element={<Layout />}>
                        {!isLogIn ? (
                            <Route path="/" element={<AuthenticationScreen />} />
                        ) : (
                            <Fragment>
                                <Route path="/" element={<ArticlesScreen />} />
                                <Route path="articles" element={<ArticlesScreen />} />
                                <Route path=':id' element={<FullArticleScreen />} />
                                <Route path="home" element={<UserScreen />} />
                            </Fragment>
                        )}
                    </Route>
                </Routes >)
        }
    </Fragment>
    );
}

export default App;
