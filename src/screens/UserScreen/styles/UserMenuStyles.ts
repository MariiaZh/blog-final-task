import { makeStyles } from '@mui/styles';
import constants from '../../../constants/constants';
import { pink } from '@mui/material/colors';

const useStyles = makeStyles({
    menu: {
        margin: "0 25px",
        width: 300,
        borderRadius: "0 0 4px 4px",
        boxShadow: constants.boxShadowGray,
        backgroundColor: 'white',
        "& li": {
            marginTop: 8,
            paddingLeft: 30
        },
    },
    icon: {
        color: pink[500],
    },
    menuItem: {
        margin: "10px 30px 10px 15px",
        display: 'flex',
    },
    menuIconWrapper: {
        margin: '0 15px',
    }
});

export default useStyles;