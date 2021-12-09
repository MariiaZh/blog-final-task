import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from "./styles/ShortCardStyles";

interface CardProps {
    id: string,
    title: string,
    text: string,
}

const ShortCard: React.FC<CardProps> = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={`${props.id}`} >
                <Typography gutterBottom variant="h6" component="p" className={classes.title}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.text}>
                    {props.text}
                </Typography>
            </Link>
        </div>
    );
}

export default ShortCard;