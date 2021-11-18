import { Avatar, Grid, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const Logo = () => {
    return (
        <Grid item display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            <Typography sx={{ ml: 1 }}>Sefa Köse</Typography>
        </Grid>
    )
}

export default Logo
