import { Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import Dialogue from './Dialogue'
import Messages from './Messages'

const Main = () => {
    return (
        <Grid container item md={8} sx={{ bgcolor: "#fff", borderRadius: 1, ml: 2, p: 2 }}>
            <Grid item md={4} >
                <TextField variant="standard" label="Search your messages..." fullWidth margin="dense" />
                <Messages />
            </Grid>
            <Grid item md={8} >
                <Dialogue />
            </Grid>
        </Grid>

    )
}

export default Main
