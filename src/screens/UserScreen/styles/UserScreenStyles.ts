import { makeStyles } from '@mui/styles';
import constatnts from '../../../constants/constants';

const articleStyles = makeStyles({
    root: {
        width: "inherit",
        display: 'flex',
        justifyContent: 'space-around',
        padding: 0,
    },

    menu: {
        margin: "0 25px",
        width: 300,
        height: constatnts.height,
        borderRadius: "0 0 4px 4px",
    },

    avatar: {
        margin: "15px auto",
        alignSelf: 'center',
        width: 156,
        height: 156
    },
})

export default articleStyles;