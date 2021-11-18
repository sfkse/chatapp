import { Grid, Paper } from '@mui/material'
import React from 'react'
import Dialogue from './Dialogue'
import Messages from './Messages'

const Main = () => {
    return (
        <Grid item md={6} alignSelf="baseline">
            <Paper sx={{ p: 3 }} elevation={0}>
                <Messages />
                <Dialogue />
            </Paper>
        </Grid>
    )
}

export default Main
