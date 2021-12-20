import { Avatar, Grid, Tooltip, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getSignedInUser } from '../firebase/auth';
import { useContext, useEffect } from 'react';
import { ChatContext } from './ChatContext';

const Logo = () => {
    const { userAuth, setUserAuth, setLoading } = useContext(ChatContext);

    useEffect(() => {
        getSignedInUser(setUserAuth, setLoading)
    }, [])

    return (
        <Grid item display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            <Typography sx={{ ml: 1 }}>{userAuth?.displayName}</Typography>
            {
                !userAuth.emailVerified ?
                    <Tooltip placement="bottom-start" title="Please verify your account via the link that has been sent to your email">
                        <ErrorOutlineIcon sx={{ marginLeft: "auto" }} color="error" />
                    </Tooltip>
                    :
                    <Tooltip placement="bottom-start" title="Account verified!">
                        <CheckCircleIcon sx={{ marginLeft: "auto" }} color="success" />
                    </Tooltip>
            }

        </Grid>
    )
}

export default Logo
