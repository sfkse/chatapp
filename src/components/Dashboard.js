import { Grid } from '@mui/material'
import React from 'react'
import Main from './Main'
import Options from './Options'

const Dashboard = () => {
    return (
        <Grid sx={{ height: "100vh" }} container spacing={4} justifyContent="center" alignItems="center" alignContent="space-around" >
            <Options />
            <Main />
        </Grid>
    )
}

export default Dashboard
