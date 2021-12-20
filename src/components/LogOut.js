import { List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { signOutUser } from '../firebase/auth';
import { useHistory } from 'react-router-dom';
import { deepPurple } from '@mui/material/colors';

const LogOut = () => {
    const history = useHistory()
    const handleSignOut = () => {
        signOutUser(history)
    }
    return (
        <List>
            <ListItem disablePadding sx={{ justifyContent: "flex-start" }} >
                <ListItemButton sx={{ p: 2 }} onClick={handleSignOut}>
                    <ListItemAvatar>
                        <LogoutIcon sx={{ color: deepPurple[500] }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography >Sign Out</Typography>}
                    />
                </ListItemButton>
            </ListItem>
        </List>


    )
}

export default LogOut
