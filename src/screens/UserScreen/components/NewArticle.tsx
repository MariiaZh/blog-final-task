import React, { Fragment, useState, useRef } from 'react';
import ReactDOM from "react-dom";

import { Button, TextField, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';

import { articlesWorkerActions } from '../../../store/articlesWorker';
import useStyles from '../styles/NewArticleStyles';
import { blue, pink } from '@mui/material/colors';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import genres_array from '../../../models/genres_array';
import postRequest from '../../../api/post_request';

const Overlay = () => {
    const classes = useStyles();
    return (
        <div className={classes.overlay}></div>
    )
}

const NewArticle = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.userAuth.user);
    const [checkedGenresArray, setCheckedGenresArray] = useState<string[]>([]);
    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const textRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>;


    const saveArticleHandler = () => {

        dispatch(articlesWorkerActions.addArticleOverlay());
        const article = {
            articleId: String(Date.now()),
            authorIdKey: currentUser.userId,
            image: imageRef.current.value,
            title: titleRef.current.value,
            text: textRef.current.value,
            date: new Date().toDateString(),
            categories: checkedGenresArray,
            likes: 0,
        }

        dispatch(articlesWorkerActions.addArticle({ ...article }));

        postRequest(
            {
                dataType: 'articles',
                ...article
            }
        )

    }

    const [isAlert, setIsAlert] = useState(false);

    const resetArticleHandler = () => {
        setIsAlert(true);
    }
    const AlertMessage = (
        <div className={classes.alert}>
            <div className={classes.warning}>
                <Typography variant='h5'>
                    <ErrorOutlineIcon /> Warning! </Typography>
                <Typography> Are you sure? Your article will be lost! </Typography>
            </div>
            <div className={classes.buttons}>
                <Button
                    variant='text' style={{ color: pink[500] }}
                    onClick={() => {
                        setIsAlert(false);
                        dispatch(articlesWorkerActions.addArticleOverlay());
                    }} >
                    I'M SURE
                </Button>
                <Button
                    variant='text' style={{ color: blue[700] }}
                    onClick={() => { setIsAlert(false) }} >
                    GO BACK
                </Button>
            </div>
        </div>
    );

    const checkListHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked && checkedGenresArray.length !== 0) {
            setCheckedGenresArray(genres => {
                return genres.filter(genre => genre !== event.target.id);
            })
        } else {
            console.log('event.targetID', event.target.id);

            setCheckedGenresArray([...checkedGenresArray, event.target.id]);
        }
        console.log(checkedGenresArray);
    }

    return (
        <Fragment>

            {ReactDOM.createPortal(
                <div className={classes.root}>
                    {isAlert && AlertMessage}
                    <h1>New Article</h1>
                    <TextField
                        id="title"
                        label="Title"
                        multiline
                        maxRows={2}
                        placeholder="Input title of your article"
                        onChange={() => { }}
                        inputRef={titleRef}
                    />
                    <TextField
                        id="text"
                        label="Text"
                        placeholder="Input text of your article"
                        multiline
                        inputRef={textRef}
                    />
                    <TextField
                        id="url"
                        label="Image URL"
                        multiline
                        placeholder="Input image URL for your article"
                        inputRef={imageRef}
                    />
                    <div>
                        <Typography>SELECT MOVIE GENRE</Typography>
                        <FormGroup style={{ display: 'flex', flexFlow: 'row wrap', width: '55%' }}>
                            {genres_array.map(genre => (
                                <FormControlLabel
                                    key={genre}
                                    control={<Checkbox id={genre} onChange={checkListHandler} />}
                                    label={genre}
                                />
                            ))}
                        </FormGroup>
                    </div>

                    <div className={classes.buttonWrapper}>
                        <Button
                            variant='text' style={{ color: pink[500] }}
                            onClick={saveArticleHandler}>
                            Save
                        </Button>
                        <Button
                            variant='text' style={{ color: blue[700] }}
                            onClick={resetArticleHandler} >
                            Reset
                        </Button>
                    </div>
                </div>,
                document.getElementById("newArticle")!)
            }
            {
                ReactDOM.createPortal(
                    <Overlay />,
                    document.getElementById("overlay")!
                )
            }
        </Fragment >
    )
}

export default NewArticle;