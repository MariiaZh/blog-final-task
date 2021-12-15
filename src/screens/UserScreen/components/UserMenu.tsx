import React from "react";
import { CardMedia, Divider, MenuList, MenuItem, ListItemText, Typography } from '@mui/material';
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store";
import { userAuthActions } from "../../../store/userAuth";
import showAvatar from "../../../models/avatars_array";

import BadgeIcon from '@mui/icons-material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import useStyles from "../styles/UserMenuStyles";

const UserMenu: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state: RootState) => state.userAuth.user);
    const path = showAvatar(currentUser.picture);

    const logOutHandler = () => {
        dispatch(userAuthActions.logOutUser());
        dispatch(userAuthActions.changePage(false));
        navigate('/');
    }

    return (
        <div className={classes.menu}>
            <CardMedia
                component="img"
                height="290"
                image={path}
            />
            <div className={classes.menuItem}>
                <div className={classes.menuIconWrapper}>
                    <BadgeIcon className={classes.icon} />
                </div>
                <div >
                    <Typography component="p">{currentUser.nickName}</Typography>
                </div>
            </div>
            <div className={classes.menuItem}>
                <div className={classes.menuIconWrapper}>
                    <MailIcon className={classes.icon} />
                </div>
                <Typography component="p">{currentUser.email}</Typography>
            </div>
            <MenuList>
                <Divider />
                <MenuItem className={classes.menuItem}>
                    <ListItemText>Add New Article</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText onClick={logOutHandler}>Log Out</ListItemText>
                </MenuItem>
            </MenuList>
        </div >
    )
}

export default UserMenu;