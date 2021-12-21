import React from "react";
import { Typography } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { userAuthActions } from '../../../store/userAuth';
import authenticationRequest from "../../../api/authentication_request";

import { useFormik } from "formik";
import { ShortValidationSchema } from "../../../validation/validation";
import { CompareExistingUsersWithInputFields } from '../../../helpers/compareUsers';

import useStyles from "../styles/AuthenticationScreenStyles";
import { pink } from "@mui/material/colors";

const SignInForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.articlesWorker.usersList);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: '',
        },

        validationSchema: ShortValidationSchema,

        onSubmit: (values) => {
            const isSuccessMsg = CompareExistingUsersWithInputFields({
                arrayOfUsers: users,
                email: values.email,
                password: values.password,
            })

            if (isSuccessMsg.status !== 'success') {
                alert(isSuccessMsg.message);
            } else {
                dispatch(authenticationRequest({
                    email: values.email,
                    password: values.password,
                    newAcc: false
                }));
                const user = users.find(user => user.email === values.email);
                dispatch(userAuthActions.logInUser({ ...user }));
            }
        },
    })
    
    const changeButtonHandler = (e: React.MouseEvent) => {
        dispatch(userAuthActions.switchButton(true));
    }

    return (
        <form className={classes.root}
            onSubmit={formik.handleSubmit} >
            <h1>Login</h1>
            <div className="classes.inputWrapper">
                <input type="email"
                    id="email"
                    placeholder="bond@james.bond"
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
                    placeholder="007-2021"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    required />
                {formik.touched.password && formik.errors.password ?
                    <Typography style={{ color: pink[800] }}>{formik.errors.password}</Typography> : ''}
            </div>

            <div className="wrapper">

                <input type="submit" value="LOG IN" />
            </div>

            <div className="wrapper">
                <input type="button"
                    value="CREATE ACCOUNT"
                    onClick={changeButtonHandler} />
            </div>
        </form >
    )
}

export default SignInForm;