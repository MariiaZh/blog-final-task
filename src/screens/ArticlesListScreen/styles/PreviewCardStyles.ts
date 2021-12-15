import { makeStyles } from '@mui/styles';
import constants from '../../../constants/constants';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 15,
        boxShadow: constants.boxShadowGray,
        maxWidth: 450,
        minHeight: 450,
        borderRadius: 6,
        backgroundColor: 'white',

        "& img": {
            borderRadius: "6px 6px 0 0",
            marginBottom: 10,
        }
    },
    text: {
        minHeight: 70
    },
    title: {
        textAlign: "center"
    },
    box: {
        display: "flex",
    },
    container: {
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'space-around'
    },
    likesValue: {
        marginRight: 10
    }
});

export default useStyles;

