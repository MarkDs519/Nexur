import React from "react";
import {Button, Grid, Link, Paper, Typography} from '@material-ui/core'; // Grid version 2
import TextField from '@mui/material/TextField';
//import { useNavigate } from "react-router-dom";
//import { margin } from "@mui/system";

const Register = ({data, onChange, handleSignUp}) => {
    //const navigate = useNavigate();
    // add styles
    const paperStyle = {
        padding: 20,
        height: '110vh',
        width: 350,
        margin: '20px auto'
    }

    const fieldStyle = {
        margin: '10px auto'
    }
    const btnStyle = {
        //background: 'darkslateblue',
        margin: '15px 0'
    }
    const validStyle = {
        fontWeight: 'bold',
        color: 'green',
        margin: '20px 0'
    }
    const notValidStyle = {
        fontWeight: 'bold',
        color: 'red',
        margin: '20px 0'
    }
    // for navigating to other pages
    //let navigate = useNavigate(); 
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                     <h1>Join The Club !</h1>
                </Grid>
                <TextField name="firstname" id="firstname" value={data.firstname} label="Enter Firstname" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required/>
                <TextField name="lastname" id="lastname" value={data.lastnme} label="Enter Lastname" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required />
                <TextField name="email" id="email" value={data.email} label="Enter Email" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required/>
                {data.emailValid===true ? null : <span style={notValidStyle}>Email is not Valid</span>}
                <TextField name="username" id="username" value={data.username} label="Enter Username" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required/>
                {data.usernameValid===true ? null : <span style={notValidStyle}>Username should have atleast 5 characters</span>}
                <TextField name="password" id="password" value={data.password} label="Enter Password" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required type='password'/>
                {data.passwordValid===true ? <span style={validStyle}>Password is Valid</span> : <span style={notValidStyle}>Password should have atleast 8 characters, 1 symbol, 1 uppercase and 1 lowercase</span>}
                <Button variant="contained" color="primary" fullWidth style={btnStyle} disabled={!data.firstname || !data.lastname || !data.email || !data.username || !data.password || data.emailValid===false || data.usernameValid===false || data.passwordValid===false} onClick={(e) => handleSignUp(e)}>Sign Up</Button>
                <Typography>
                    Already have an account?
                    <Link href='/'> Sign In</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Register;