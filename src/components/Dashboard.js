import { Grid } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ChatContext } from './ChatContext'
import Main from './Main'
import Options from './Options'


const Dashboard = () => {
    const [userAuth] = useContext(ChatContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!userAuth) navigate('/register')
    }, [])

    return (
        <Grid sx={{ height: "90vh", mt: "3rem" }} container justifyContent="center" >
            <Options />
            <Main />
        </Grid>

    )
}

export default Dashboard
