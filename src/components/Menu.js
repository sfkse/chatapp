import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const Menu = () => {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton sx={{ p: 2 }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Sefa Köse"
                        secondary="Hey buddy!"
                    />

                </ListItemButton>
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem disablePadding>
                <ListItemButton sx={{ p: 2 }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Sefa Köse"
                        secondary="Hey buddy!"
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem disablePadding>
                <ListItemButton sx={{ p: 2 }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Sefa Köse"
                        secondary="Hey buddy!"
                    />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default Menu
