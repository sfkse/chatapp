import { Grid } from '@mui/material'
import React from 'react'
import Main from './Main'
import Options from './Options'


const Dashboard = () => {



    return (
        <Grid sx={{ height: "100vh", mt: "3rem" }} container justifyContent="center" >
            <Options />
            <Main />
        </Grid>

    )
}

export default Dashboard
