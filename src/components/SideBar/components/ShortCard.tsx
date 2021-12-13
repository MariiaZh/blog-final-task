import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyles from "../styles/ShortCardStyles";

interface CardProps {
    id: string,
    title: string,
    text: string,
}

const ShortCard: React.FC<CardProps> = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const goToArticleHandler = () => navigate(`/${props.id}`)

    return (
        <div className={classes.root}>

            <Typography variant="body1" component="p" className={classes.title}>
                {props.title}
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary" className={classes.text}>
                {props.text}
                <Button onClick={goToArticleHandler} size="small">
                    read all</Button>
            </Typography>


        </div>
    );
}

export default ShortCard;