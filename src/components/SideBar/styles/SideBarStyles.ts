import { makeStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';

const useStyles = makeStyles({
    sidebar: {
        width: 300,
        margin: 25,
        borderBottom: "2px solid lightgray"
    },
    sidebarTitle: {
        color: pink[500],
        textAlign: 'center'
    },
})

export default useStyles;