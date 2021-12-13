import React from "react";

import dummy_users from '../../../models/dummy_users';
import useStyles from "../styles/UserScreenStyles";

import { Avatar, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BadgeIcon from '@mui/icons-material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const UserMenu: React.FC = () => {
    const classes = useStyles();

    return (

        <Paper className={classes.menu}>
            <Avatar className={classes.avatar} />
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <BadgeIcon />
                    </ListItemIcon>
                    <ListItemText inset>{dummy_users[0].nickName}</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText inset>{dummy_users[0].email}</ListItemText>
                </MenuItem>
                <Divider />

                <MenuItem>
                    <ListItemText>Add New Article</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem>
                    <ListItemText>Log Out</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>

    )
}

export default UserMenu;