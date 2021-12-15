import React, { Fragment } from "react";

import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import { useSelector } from "react-redux";
import { RootState } from "./store";

import ArticlesScreen from './screens/ArticlesListScreen/ArticlesListScreen';
import FullArticleScreen from "./screens/FullArticleScreen/FullArticleScreen";
import UserScreen from './screens/UserScreen/UserScreen';
import AuthenticationScreen from './screens/AuthenticationScreen/AuthenticationScreen';

function App() {

    const isLogIn: boolean = useSelector((state: RootState) => state.userAuth.isLoginInSystem);

    return (
        <Routes>
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
        </Routes >
    );
}

export default App;
