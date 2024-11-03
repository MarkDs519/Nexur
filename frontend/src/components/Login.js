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
        height: '77vh',
        width: 280,
        margin: '20px auto'
    }

    const avatarStyle = {
        background: '#314C54'
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
        fontSize: '10px',
        color: 'green',
        margin: '50px 0'
    }
    const notValidStyle = {
        fontWeight: 'bold',
        fontSize: '10px',
        color: 'orange',
        margin: '50px 0px'
    }
    // for navigating to other pages
    //let navigate = useNavigate(); 
    return (
        <div className="login">
            <div>
                <h1 className="title">neXur</h1>
            </div>
        
            <div className="user-signin">
                <Grid>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
                                <h1 className="title-signin">Sign In</h1>
                        </Grid>
                        <TextField name="username" id="username" value={data.username} label="Username" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required/>
                        <TextField name="password" value={data.password} id="password" label="Password" variant="outlined" fullWidth style={fieldStyle} onChange={(e) => onChange(e)} required type='password'/>
                        {data.passwordValid===true ? <span style={validStyle}>Password is Valid &nbsp;</span> : <span style={notValidStyle}>Password should have atleast 8 characters, 1 symbol, 1 uppercase and 1 lowercase &nbsp;</span>}
                        <FormControlLabel name="rememberCheckbox" control={<Checkbox id="rememberCheckbox" name="rememberCheckbox" checked={data.rememberCheckbox} onChange={(e) => onChange(e)}/>} label="Remember me" />
                        <Button variant="contained" color="primary" fullWidth style={btnStyle} disabled={!data.username || !data.password || data.usernameValid===false || data.passwordValid===false} onClick={e => navigate('/home')}>Log in</Button>
                        <Typography>
                            <Link color="#fffff" href='#'>Forgot password ?</Link>
                        </Typography>
                        <Typography>
                            <Link color="#314C54" href='/Register'>Sign Up</Link>
                        </Typography>
                    </Paper>
                </Grid>
            </div>
        </div>
        
    )
}

export default Login;