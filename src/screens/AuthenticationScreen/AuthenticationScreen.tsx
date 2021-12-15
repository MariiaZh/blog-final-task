import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { userAuthActions } from '../../store/userAuth';
import dummy_users from "../../models/dummy_users";
import User from "../../models/User";

import useStyles from "./styles/AuthenticationScreenStyles";

const AuthenticationScreen = () => {
    const classes = useStyles();
    const isNewAccountCreating: boolean = useSelector((state: RootState) => state.userAuth.isNewAccountCreating);
    const dispatch = useDispatch();
    const inputEmail = useRef() as React.MutableRefObject<HTMLInputElement>;
    const inputPassword = useRef() as React.MutableRefObject<HTMLInputElement>;

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        let currentEmail: string | void = inputEmail.current.value === '' ? 'zero' : inputEmail.current.value;
        let currentPassword: string | void = inputPassword.current.value === '' ? 'zero' : inputPassword.current.value;
        let user: User | void;

        if (currentEmail !== 'zero' || currentPassword !== 'zero') {
            user = dummy_users.find(user => (user.email === currentEmail ||
                user.password === currentPassword)
            );
        }
        if (user) {
            dispatch(userAuthActions.logInUser({
                userId: user.userId,
                email: user.email,
                password: user.password,
                nickName: user.nickName,
                role: user.role,
                picture: user.picture
            }));
        }
    }

    const changeButtonHandler = (e: React.MouseEvent) => {
        dispatch(userAuthActions.switchButton());
    }

    return (

        <form className={classes.root}
            onSubmit={submitHandler} >
            <h1>{isNewAccountCreating ? "Create new user account" : "Login"}</h1>
            <input
                type="email"
                placeholder={isNewAccountCreating ? "input your email" : "bond@james.bond"}
                ref={inputEmail}
                required />
            <input
                type="password"
                placeholder={isNewAccountCreating ? "input your password" : "007-2021"}
                ref={inputPassword}
                required />
            <div className="wrapper">
                <input type="submit" value={isNewAccountCreating ? "CREATE ACCOUNT" : "LOG IN"} />
            </div>
            <div className="wrapper">
                <input type="button"
                    value={isNewAccountCreating ? "LOG IN" : "CREATE ACCOUNT"}
                    onClick={changeButtonHandler} />
            </div>
        </form>

    )
}

export default AuthenticationScreen;