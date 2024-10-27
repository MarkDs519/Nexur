import React from "react";
import {Avatar, Button, Grid, Link, Paper, Typography} from '@material-ui/core'; // Grid version 2
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";

const Login = ({data, onChange}) => {
    const navigate = useNavigate();
    // add styles
    const paperStyle = {
        padding: 20,
        height: '80vh',
        width: 280,
        margin: '20px auto'
    }

    const avatarStyle = {
        background: 'darkslateblue'
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
                    <Avatar style={avatarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
                        <h1>Sign In</h1>
                </Grid>
                <TextField name="username" id="username" value={data.username} label="Username" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required/>
                <TextField name="password" value={data.password} id="password" label="Password" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required type='password'/>
                {data.passwordValid===true ? <span style={validStyle}>Password is Valid &nbsp;</span> : <span style={notValidStyle}>Password should have atleast 8 characters, 1 symbol, 1 uppercase and 1 lowercase &nbsp;</span>}
                <FormControlLabel name="rememberCheckbox" control={<Checkbox id="rememberCheckbox" name="rememberCheckbox" checked={data.rememberCheckbox} onChange={(e) => onChange(e)}/>} label="Remember me" />
                <Button variant="contained" color="primary" fullWidth style={btnStyle} disabled={!data.username || !data.password || data.usernameValid===false || data.passwordValid===false} onClick={e => navigate('/home')}>Log in</Button>
                <Typography>
                    <Link href='#'>Forgot password ?</Link>
                </Typography>
                <Typography>
                    <Link href='/Register'>Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;