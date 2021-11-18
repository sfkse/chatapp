import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const Messages = () => {
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
                    <ListItemText
                        sx={{ textAlign: "right" }}
                        primary="08:56"
                        secondary="3"
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem disablePadding>
                <ListItemButton sx={{ p: 2 }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Sefa Köse"
                        secondary="Hey buddy!"
                    />
                    <ListItemText
                        sx={{ textAlign: "right" }}
                        primary="08:56"
                        secondary="3"
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem disablePadding>
                <ListItemButton sx={{ p: 2 }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Sefa Köse"
                        secondary="Hey buddy!"
                    />
                    <ListItemText
                        sx={{ textAlign: "right" }}
                        primary="08:56"
                        secondary="3"
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem disablePadding>
                <ListItemButton sx={{ p: 2 }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Sefa Köse"
                        secondary="Hey buddy!"
                    />
                    <ListItemText
                        sx={{ textAlign: "right" }}
                        primary="08:56"
                        secondary="3"
                    />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default Messages
