import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <Grid sx={{ minHeight: "100vh" }} display="flex" direction="column" item container xs={12} sm={8} md={5} spacing="3" margin="auto" justifyContent="center" alignItems="center">
            <Grid item container direction="column" justifyContent="center" alignItems="center">
                <img src={Logo} alt="Logo" width="100" />
                <Button sx={{ m: '2rem', width: '200px' }} variant="outlined" fullWidth >Sign In with Google</Button>
                <Divider sx={{ width: "40%", mb: '2rem', color: "rgba(0,0,0,0.3)" }}><Typography>OR</Typography></Divider>
                <TextField
                    sx={{ width: "60%" }}
                    margin="dense"
                    label="E-mail"
                    variant="standard"
                    error
                    helperText="Incorrect entry."
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                    }} />
                <TextField
                    sx={{ width: "60%" }}
                    margin="dense" label="Password"
                    type="password"
                    variant="standard"
                    error
                    helperText="Incorrect entry."
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                    }} />
            </Grid>
            <Grid item display="flex" justifyContent="space-between" alignItems="center">
                <Link sx={{ m: "2rem" }} href="/reset" size="small"><Typography variant="body2">Forgot your password?</Typography></Link>
                <Button sx={{ m: "2rem" }} variant="contained">Sign In</Button>

            </Grid>
            <Grid item>
                <Typography variant="body2">Don't you have an account? Create one <Link href="register">here</Link></Typography>
            </Grid>
        </Grid>
    )
}

export default Login
