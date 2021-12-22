import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../store";


import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

const AuthenticationScreen = () => {
    const isNewAccountCreating = useSelector((state: RootState) => state.userAuth.isNewAccountCreating);
    return (
        <Fragment>
            {isNewAccountCreating ?
                <SignUpForm /> :
                <SignInForm />}
        </Fragment>
    )
}

export default AuthenticationScreen;