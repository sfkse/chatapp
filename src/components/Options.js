import { Grid, Paper } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Options = () => {
    return (
        <Grid item md={2}>
            <Paper sx={{ p: 3, mb: 2 }} elevation={0}>
                <Logo />
            </Paper>
            <Paper elevation={0}>
                <Menu />
            </Paper>
        </Grid>
    )
}

export default Options
