import * as Yup from 'yup';

export const FullValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),

    password: Yup
        .string()
        .min(5, 'Password should be of minimum 5 characters length')
        .required('Password is required'),

    nickName: Yup
        .string()
        .min(2, 'Nick Name should be of minimum 2 characters length')
        .required('Nick Name is required'),

});

export const ShortValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),

    password: Yup
        .string()
        .min(5, 'Password should be of minimum 5 characters length')
        .required('Password is required'),
});

