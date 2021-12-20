import { Alert, Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Logo from '../assets/logo.png'
import { Link, useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { signInUser, signupWithGoogle } from '../firebase/auth';
import { ChatContext } from './ChatContext';


const validate = values => {
    const errors = {};

    if (!values.email)
        errors.email = 'This field is reqired'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Invalid e-mail address'

    if (!values.password)
        errors.password = 'This field is reqired'
    else if (values.password.length < 6)
        errors.password = 'Password must be minimum 6 characters'

    return errors;
}


const Login = () => {
    const { setUserAuth } = useContext(ChatContext)
    const [error, setError] = useState()
    const history = useHistory()


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            signInUser(values, setUserAuth, setError, history)
        }
    })

    const handleGoogleSignIn = () => {
        signupWithGoogle(setUserAuth, history)
    }
    return (
        <Grid sx={{ minHeight: "100vh", p: "2rem" }} display="flex" direction="column" container xs={12} sm={8} md={5} spacing="3" margin="auto" justifyContent="center" alignItems="center">
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: "100%" }}>

                <Grid item container direction="column" justifyContent="center" alignItems="center">
                    <img src={Logo} alt="Logo" width="100" />
                    <Button
                        sx={{ m: '2rem', width: '200px' }}
                        variant="outlined"
                        fullWidth
                        onClick={handleGoogleSignIn}
                    >Sign In with Google</Button>
                    <Divider sx={{ width: "40%", mb: '2rem', color: "rgba(0,0,0,0.3)" }}><Typography>OR</Typography></Divider>
                    {error ? <Alert severity="error">{error}</Alert> : null}
                    <TextField
                        sx={{ width: "60%" }}
                        margin="dense"
                        label="E-mail"
                        name="email"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email ? true : false}
                        helperText={formik.errors.email}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                        }} />
                    <TextField
                        sx={{ width: "60%" }}
                        margin="dense"
                        label="Password"
                        name="password"
                        type="password"
                        variant="standard"
                        error={formik.errors.password ? true : false}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        helperText={formik.errors.password}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                        }} />

                    <Grid item >
                        <Button type="submit" sx={{ m: "2rem" }} variant="contained">Sign In</Button>
                    </Grid>

                    <Grid item >
                        <Link sx={{ m: "2rem" }} href="/reset" size="small"><Typography variant="body2">Forgot your password?</Typography></Link>
                    </Grid>
                    <Grid item sx={{ mt: "2rem" }}>
                        <Typography variant="body2">Don't you have an account? Create one <Link to="register">here</Link></Typography>
                    </Grid>
                </Grid>

            </Box>
        </Grid>
    )
}

export default Login
