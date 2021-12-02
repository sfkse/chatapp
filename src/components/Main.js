import { Button, Grid, TextField } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import Dialogue from './Dialogue'
import Messages from './Messages'
import { theme } from '../theme'

const Main = () => {

    return (
        <Grid container item md={9} sx={{ bgcolor: "#fff", borderRadius: 1, ml: 2, p: 2 }}>
            <Grid display="flex" direction="column" item md={4} >
                <TextField variant="standard" label="Search your messages..." fullWidth margin="dense" />
                <Button sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: "#fff",
                    paddingX: "20px",
                    marginTop: "1rem",
                    ":hover": {
                        backgroundColor: theme.palette.primary.dark
                    }
                }} startIcon={<ChatIcon />}>New Message</Button>
                <Messages />
            </Grid>
            <Grid sx={{ padding: "1rem" }} item md={8} >
                <Dialogue />
            </Grid>
        </Grid>

    )
}

export default Main
