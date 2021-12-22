import React, { useState, useEffect, useCallback } from "react";
import { CardMedia, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { userAuthActions } from '../../../store/userAuth';

import { useFormik } from "formik";
import { FullValidationSchema } from "../../../validation/validation";
import { CompareNewUserWithExisting } from '../../../helpers/compareUsers';
import authenticationRequest from "../../../api/authentication_request";
import { postRequest } from "../../../api/post_request";

import useStyles from "../styles/AuthenticationScreenStyles";
import { pink } from "@mui/material/colors";
import showAvatar, { avatars } from '../../../models/avatars_array';

const SignUpForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.articlesWorker.usersList);
    const { localId, access } = useSelector((state: RootState) => state.userAuth);

    const [isNewUserId, setIsNewUserId] = useState('nobody');
    const [alignment, setAlignment] = useState("1");

    const formik = useFormik({
        initialValues: {
            email: "",
            password: '',
            nickName: ''
        },
        validationSchema: FullValidationSchema,

        onSubmit: (values) => {
            const isSuccessMsg = CompareNewUserWithExisting({
                arrayOfUsers: users,
                email: values.email,
                nickName: values.nickName,
            })

            if (isSuccessMsg.status !== 'success') {
                alert(isSuccessMsg.message);
            } else {
                alert(isSuccessMsg.message);
                dispatch(userAuthActions.getAccess(true));
                dispatch(authenticationRequest({
                    email: values.email,
                    password: values.password,
                    newAcc: true
                })
                )
            }
        }
    })

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => {
        setAlignment(newAlignment);
    };
    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };

    useEffect(() => {
        if (access && localId !== isNewUserId && localId !== '') {
            const user = {
                userId: localId,
                nickName: formik.values.nickName,
                picture: control.value,
                email: formik.values.email,
                password: formik.values.password,
                role: "user",
            }
            console.log('!!!FROM USEEFFECT SIGN USER:');
            dispatch(postRequest({
                dataType: "users",
                data: { ...user }
            }));
            dispatch(userAuthActions.logInUser({ ...user }));
            setIsNewUserId(localId);
        }
    }, [access, localId, isNewUserId, dispatch, formik.values.nickName, control.value, formik.values.email, formik.values.password,])

    const changeButtonHandler = useCallback((e: React.MouseEvent) => {
        dispatch(userAuthActions.switchButton(false));
    }, [dispatch])

    return (<form className={classes.root}
        onSubmit={formik.handleSubmit} >
        <h1>Create new user account</h1>
        <div className="classes.inputWrapper">
            <input type="email"
                id="email"
                placeholder="input your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required />
            {formik.touched.email && formik.errors.email ?
                <Typography style={{ color: pink[800] }}>{formik.errors.email}</Typography> : ''}
        </div>
        <div className="classes.inputWrapper">
            <input
                type="password"
                id="password"
                placeholder="input your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                required />
            {formik.touched.password && formik.errors.password ?
                <Typography style={{ color: pink[800] }}>{formik.errors.password}</Typography> : ''}
        </div>
        <div className="classes.inputWrapper">
            <input
                type="text"
                id="nickName"
                placeholder="input your name and surname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nickName}
                required />
            {formik.touched.nickName && formik.errors.nickName ?
                <Typography style={{ color: pink[800] }}>{formik.errors.nickName}</Typography> : ''}
        </div>

        <h3>Choose your avatar:</h3>
        <div className={classes.pictureWrapper}>
            <ToggleButtonGroup
                size="large" {...control} >
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
        <div className="wrapper">
            <input type="submit"
                value="CREATE ACCOUNT" />
        </div>
        <div className="wrapper">
            <input type="button"
                value="LOG IN"
                onClick={changeButtonHandler} />
        </div>
    </form >)
}

export default SignUpForm;