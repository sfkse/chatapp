import { Button, Divider, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../assets/logo.png';

const Register = () => {
    return (
        <Grid style={{ minHeight: "100vh", padding: "2rem" }} display="flex" direction="column" container xs={12} sm={8} md={5} spacing="3" margin="auto" justifyContent="center" alignItems="center">
            <Grid item container direction="column" justifyContent="center" alignItems="center">
                <img src={Logo} alt="Logo" width="100" />
                <Button style={{ margin: '2rem', width: '200px' }} variant="outlined" fullWidth >Sign Up with Google</Button>
                <Divider style={{ width: "40%", marginBottom: '2rem', color: "rgba(0,0,0,0.3)" }}>OR</Divider>
                <TextField
                    style={{ width: "60%" }}
                    margin="dense"
                    label="Name"
                    variant="standard"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                    }} />
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
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                    }} />
                <TextField
                    style={{ width: "60%" }}
                    margin="dense" label="Confirm Password"
                    type="password"
                    variant="standard"
                    error
                    helperText="Passwords doesn't match."
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                    }} />
            </Grid>
            <Grid item >
                <Button style={{ margin: "2rem" }} variant="contained">Sign Up</Button>

            </Grid>
            <Grid item>
                <Typography variant="body2">Do you have an account already? Sign in <Link href="/register">here</Link></Typography>
            </Grid>
        </Grid>
    )
}

export default Register
