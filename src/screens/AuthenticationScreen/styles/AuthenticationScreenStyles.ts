import { makeStyles } from '@mui/styles';
import { blue, indigo } from '@mui/material/colors';
import constatnts from '../../../constants/constants';

const useStyles = makeStyles({
    root: {
        width: "40%",
        margin: "95px auto",
        background: blue[700],
        padding: 25,
        borderRadius: 4,
        boxShadow: constatnts.boxShadowGray,

        "& h1, h3": {
            margin: 0,
            color: "white",
            textShadow: constatnts.textShadowIndigo,
        },

        "& input[type=email], input[type=password], input[type=text]": {
            display: "block",
            width: "94%",
            height: 25,
            margin: "15px 0",
            padding: 10,
            border: "none",
            borderRadius: 4,
            boxShadow: `2px 4px 2px ${indigo[900]}`,
            outline: "none",
            fontSize: 20,
        },

        "& .wrapper": {
            width: "100%",
            height: 40,
            margin: "25px 0 0",
        },

        "& input[type=submit]": {
            display: "block",
            margin: "0 auto",
            padding: "10px 15px 8px",
            borderRadius: 9,
            border: `1px solid ${blue[100]}`,
            outline: "none",
            fontSize: 16,
            fontWeight: "bold",
            color: blue[900],
            alignItem: "middle",
            background: blue[100],
            boxShadow: `2px 4px 2px ${blue[900]}`,
        },

        "& input[type=submit]:hover": {
            background: blue[200],
            border: `1px solid ${blue[200]}`,
        },

        "& input[type=submit]:active": {
            background: blue[100],
            border: "none",
        },

        "& input[type=button]": {
            display: "block",
            margin: 0,
            padding: "8px 8px",
            border: "none",
            borderBottom: `2px solid ${blue[900]}`,
            outline: "none",
            fontSize: 16,
            fontWeight: "bold",
            color: blue[900],
            alignItem: "middle",
            background: "none",
        },

        "& input[type=button]:hover": {
            color: blue[500],
            borderBottom: `2px solid ${blue[500]}`,
        },

        "& input[type=button]:active": {
            color: "white",
            borderBottom: `3px solid white`,
        },
    },

    pictureWrapper: {
        marginTop: 15,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: "space-evenly",
        zIndex: 100,

        "& .pictureBorder": {

            //border: '4px solid white'
        },
    },

});

export default useStyles;