import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star';
const Menu = () => {
    return (
        <List>
            <ListItem disablePadding sx={{ justifyContent: "flex-start" }} >
                <ListItemButton sx={{ p: 2 }}>
                    <ListItemAvatar>
                        <StarIcon sx={{ color: deepPurple[500] }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography >Archived messages</Typography>}
                    />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default Menu
