import { Grid } from '@mui/material'
import { useContext } from 'react'
import { ChatContext } from './ChatContext'
import Main from './Main'
import Options from './Options'


const Dashboard = () => {
    const { userAuth } = useContext(ChatContext)
    console.log(userAuth)
    return (
        <Grid sx={{ padding: "3rem" }} container justifyContent="center" >
            <Options />
            <Main />
        </Grid>

    )
}

export default Dashboard
