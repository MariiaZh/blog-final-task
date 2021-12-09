import { makeStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',

        width: "100%",
        padding: 0,
        margin: 0,
    },

    sidebar: {
        width: "20%",
        margin: 25,
        borderBottom: "2px solid lightgray"
    },

})

export default useStyles;