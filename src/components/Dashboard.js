import { Grid } from '@mui/material'
import Main from './Main'
import Options from './Options'


const Dashboard = () => {

    return (
        <Grid sx={{ padding: "3rem" }} container justifyContent="center" >
            <Options />
            <Main />
        </Grid>

    )
}

export default Dashboard
