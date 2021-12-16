import { Button, Divider, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../assets/logo.png';
import Alert from '@mui/material/Alert';
import { useFormik } from 'formik';
import { signUpUser, signupWithGoogle } from '../firebase/auth';
import { useNavigate } from 'react-router';
import { ChatContext } from './ChatContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const validate = values => {
    const errors = {};
    if (!values.name)
        errors.name = 'This field is reqired'

    if (!values.email)
        errors.email = 'This field is reqired'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Invalid e-mail address'

    if (!values.password)
        errors.password = 'This field is reqired'
    else if (values.password.length < 6)
        errors.password = 'Password must be minimum 6 characters'

    if (!values.passwordConfirm)
        errors.passwordConfirm = 'This field is reqired'
    else if (values.password !== values.passwordConfirm)
        errors.passwordConfirm = 'Passwords don\'t match'

    return errors;
}

const Register = () => {
    const [userAuth, setUserAuth] = useContext(ChatContext)
    const [error, setError] = useState()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validate,
        onSubmit: values => {
            signUpUser(values, setUserAuth, setError, navigate)
        }
    })

    const handleGoogleSignUp = (e) => {
        e.preventDefault()
        signupWithGoogle()
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
                        onClick={handleGoogleSignUp}
                    >
                        Sign Up with Google
                    </Button>
                    <Divider sx={{ width: "40%", mb: '2rem', color: "rgba(0,0,0,0.3)" }}><Typography>OR</Typography></Divider>
                    {error ? <Alert severity="error">The email address you provide is already exist!</Alert> : null}
                    <TextField
                        sx={{ width: "60%" }}
                        margin="dense"
                        label="Name*"
                        name="name"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.errors.name ? true : false}
                        helperText={formik.errors.name}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                        }} />
                    <TextField
                        sx={{ width: "60%" }}
                        margin="dense"
                        label="E-mail*"
                        name="email"
                        variant="standard"
                        error={formik.errors.email ? true : false}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        helperText={formik.errors.email}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                        }} />
                    <TextField
                        sx={{ width: "60%" }}
                        margin="dense"
                        label="Password*"
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
                    <TextField
                        sx={{ width: "60%" }}
                        margin="dense"
                        label="Confirm Password*"
                        name="passwordConfirm"
                        type="password"
                        variant="standard"
                        error={formik.errors.passwordConfirm ? true : false}
                        onChange={formik.handleChange}
                        value={formik.values.passwordConfirm}
                        helperText={formik.errors.passwordConfirm}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                        }} />
                    <Grid item >
                        <Button type="submit" sx={{ m: "2rem" }} variant="contained">Sign Up</Button>
                    </Grid>
                </Grid>
            </Box>
            <Grid item>
                <Typography variant="body2">Do you already have an account? Sign in <Link to="login">here</Link></Typography>
            </Grid>
        </Grid >
    )
}

export default Register
