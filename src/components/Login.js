import { Button, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Logo from '../assets/logo.png'


const Login = () => {

    return (
        <Grid style={{ minHeight: "100vh" }} display="flex" direction="column" container xs={12} sm={8} md={5} spacing="3" margin="auto" justifyContent="center" alignItems="center">
            <Grid item container direction="column" justifyContent="center" alignItems="center">
                <img src={Logo} alt="Logo" width="100" />
                <Button style={{ margin: '2rem', width: '200px' }} variant="outlined" fullWidth >Sign In with Google</Button>
                <Divider style={{ width: "40%", marginBottom: '2rem', color: "rgba(0,0,0,0.3)" }}>OR</Divider>
                <TextField
                    style={{ width: "60%" }}
                    margin="dense"
                    label="E-mail"
                    variant="standard"
                    error
                    helperText="Incorrect entry."
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                    }} />
                <TextField
                    style={{ width: "60%" }}
                    margin="dense" label="Password"
                    type="password"
                    variant="standard"
                    error
                    helperText="Incorrect entry."
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                    }} />
            </Grid>
            <Grid item >
                <Link style={{ margin: "2rem" }} href="/reset" size="small">Forgot your password?</Link>
                <Button style={{ margin: "2rem" }} variant="contained">Sign In</Button>

            </Grid>
            <Grid item>
                <Typography variant="body2">Don't you have an account? Create one <Link href="/register">here</Link></Typography>
            </Grid>
        </Grid>
    )
}

export default Login
