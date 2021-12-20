import { Avatar, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOutUser } from '../firebase/auth';
import { useHistory } from 'react-router-dom';

const Logo = () => {
    const history = useHistory()

    const handleSignOut = () => {
        signOutUser(history)
    }
    return (
        <Grid item display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            <Typography sx={{ ml: 1 }}>Sefa Köse</Typography>
            <Tooltip placement="bottom-start" title="Please verify your account via the link that has been sent to your email">
                <ErrorOutlineIcon sx={{ marginLeft: "auto" }} color="error" />
            </Tooltip>
            {/* <Tooltip placement="bottom-start" title="Account verified!">
                <CheckCircleIcon sx={{ marginLeft: "auto" }} color="success" />
            </Tooltip> */}
            <IconButton color="secondary" aria-label="add an alarm" onClick={handleSignOut}>
                <LogoutIcon />
            </IconButton>
        </Grid>
    )
}

export default Logo
