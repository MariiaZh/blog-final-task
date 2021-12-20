import React, { useState, useRef, Fragment, useEffect } from "react";
import { CardMedia, ToggleButtonGroup, ToggleButton } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { userAuthActions } from '../../store/userAuth';

import useStyles from "./styles/AuthenticationScreenStyles";
import authenticationRequest from "../../api/authentication_request";
import showAvatar, { avatars } from '../../models/avatars_array';
import postRequest from "../../api/post_request";
import User from '../../models/User';

const AuthenticationScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const isNewAccountCreating: boolean = useSelector((state: RootState) => state.userAuth.isNewAccountCreating);
    const usersArray = useSelector((state: RootState) => state.articlesWorker.usersList);
    const status = useSelector((state: RootState) => state.userAuth.status);
    const localId = useSelector((state: RootState) => state.userAuth.localId);

    const inputEmail = useRef() as React.MutableRefObject<HTMLInputElement>;
    const inputPassword = useRef() as React.MutableRefObject<HTMLInputElement>;
    const inputName = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [alignment, setAlignment] = React.useState("1");
    const [isAuth, setIsAuth] = useState(false);

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => {
        setAlignment(newAlignment);
    };

    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };

    useEffect(() => {

        if (isAuth && inputEmail.current.value !== '' && inputPassword.current.value !== '') {
            dispatch(authenticationRequest({
                email: inputEmail.current.value,
                password: inputPassword.current.value,
                newAcc: isNewAccountCreating ? true : false
            }));
            setIsAuth(false);
        }
    }, [isAuth, isNewAccountCreating, dispatch]);

    useEffect(() => {
        if (status === 'resolved') {
            if (isNewAccountCreating) {

                const checkEmail: User | void | undefined = usersArray.find(user => user.email === inputEmail.current.value);
                const checkName: User | void | undefined = usersArray.find(user => user.nickName === inputName.current.value);

                if (checkEmail) {
                    alert("Sorry, this email has already existed. Please input another email")
                } else if (checkName) {
                    alert("Sorry, this name has already existed. Please input another name")
                } else {

                    console.log("localId", localId)
                    const user = {
                        userId: localId,
                        nickName: inputName.current.value,
                        picture: control.value,
                        email: inputEmail.current.value,
                        password: inputPassword.current.value,
                        role: "user",
                    }
                    postRequest({
                        dataType: "users",
                        ...user
                    })
                    dispatch(userAuthActions.logInUser({ ...user }));
                    inputName.current.value = '';
                }

            } else {
                const user = usersArray.find(user => user.userId === localId);
                dispatch(userAuthActions.logInUser({ ...user }));
            }
            inputEmail.current.value = ''
            inputPassword.current.value = ''
        }
    }, [status, localId, control.value, dispatch, isNewAccountCreating, usersArray]);

    const changeButtonHandler = (e: React.MouseEvent) => {
        dispatch(userAuthActions.switchButton());
    }

    const createAccountHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAuth(true);
    };

    const logInHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAuth(true);
    };

    return (
        <form className={classes.root}
            onSubmit={isNewAccountCreating ? createAccountHandler : logInHandler} >
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

            {isNewAccountCreating && (
                <Fragment>
                    <input
                        type="text"
                        placeholder="input your name and surname"
                        ref={inputName}
                        required />
                    <h3>Choose your avatar:</h3>
                    <div className={classes.pictureWrapper}>
                        <ToggleButtonGroup size="large" {...control} >
                            {avatars.map((avatar, index) => (
                                <ToggleButton key={avatar} value={+index} >
                                    <div className='pictureBorder'>
                                        <CardMedia component="img" height="70" width='70'
                                            image={showAvatar(index)}
                                        />
                                    </div>
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </div>
                </Fragment>
            )
            }
            <div className="wrapper">
                {isNewAccountCreating ?
                    <input type="submit" onClick={createAccountHandler} value="CREATE ACCOUNT" />
                    : <input type="submit" onClick={logInHandler} value="LOG IN" />}
            </div>

            <div className="wrapper">
                <input type="button"
                    value={isNewAccountCreating ? "LOG IN" : "CREATE ACCOUNT"}
                    onClick={changeButtonHandler} />
            </div>
        </form >
    )
}

export default AuthenticationScreen;