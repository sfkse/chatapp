import { Chip, Divider, Grid, TextField } from '@mui/material'
import Dialogue from './Dialogue'
import Messages from './Messages'
import { theme } from '../theme'

const Main = () => {
    return (
        <Grid container item md={9} sx={{ bgcolor: "#fff", borderRadius: 1, ml: 2, p: 2 }}>
            <Grid item md={4} >
                <TextField variant="standard" label="Search your messages..." fullWidth margin="dense" />
                <Divider sx={{ marginTop: "2rem" }}>
                    <Chip sx={{ backgroundColor: theme.palette.primary.light, color: "#fff" }} label="Messages" />
                </Divider>
                <Messages />
            </Grid>
            <Grid sx={{ padding: "1rem" }} item md={8} >
                <Dialogue />
            </Grid>
        </Grid>

    )
}

export default Main
