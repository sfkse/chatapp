import { Grid } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link, Outlet } from "react-router-dom"
import { ChatContext } from './ChatContext'
import Main from './Main'
import Options from './Options'


const Dashboard = () => {
    const [userAuth] = useContext(ChatContext)
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!userAuth) navigate('/register')
    // }, [userAuth])

    return (
        <Grid sx={{ padding: "3rem" }} container justifyContent="center" >
            <Options />
            <Main />
        </Grid>

    )
}

export default Dashboard
