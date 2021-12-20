import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';

import { Button, Avatar, Container, AppBar, Toolbar } from '@mui/material';
import useStyles from './styles/HeaderStyles';
import stringAvatar from '../../helpers/avatarUI';
import { userAuthActions } from '../../store/userAuth';

const Header: React.FC = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const userName: string = useSelector((state: RootState) => state.userAuth.user.nickName);
    const isLoginInSystem: boolean = useSelector((state: RootState) => state.userAuth.isLoginInSystem);
    const isItHomePage: boolean = useSelector((state: RootState) => state.userAuth.homePage);

    const changeScreenHandler = (page: string) => {
        switch (page) {
            case 'articles':
                dispatch(userAuthActions.changePage(false));
                break;
            case "home":
                dispatch(userAuthActions.changePage(true));
                break;
            default:
                dispatch(userAuthActions.changePage(false));
        }
        navigate(`/${page.toLowerCase()}`);
    }

    const logOutHandler = () => {
        dispatch(userAuthActions.logOutUser());
        dispatch(userAuthActions.changePage(false));
        navigate(`/`);
    }

    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters className={classes.toolbar}>
                    <div className={classes.logo}>
                        CRITIC'S GAZE
                    </div>
                    {isLoginInSystem &&
                        <div className={classes.buttons}>
                            <Button onClick={() => { changeScreenHandler('articles') }} >
                                <span className={!isItHomePage ? classes.underline : ''}>Articles</span>
                            </Button>
                            <Button onClick={() => { changeScreenHandler('home') }} >
                                <span className={isItHomePage ? classes.underline : ''}>Home</span>
                            </Button>
                        </div>
                    }
                    <div className={classes.avatar}>
                        <Avatar {...stringAvatar(userName)} />
                        {isLoginInSystem && <Button onClick={logOutHandler}>Log Out</Button>}
                    </div>
                </Toolbar >
            </Container >
        </AppBar >
    );
};
export default Header;