import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Input } from '@mui/material';
import { createUseStyles } from 'react-jss';
import './Login.css';
import insta from '../Assets/Instagram.jpeg';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom';

export default function Login() {
    const useStyles = createUseStyles({
        text1 : {
            color : 'grey',
            textAlign : 'center'
        },
        
        text2 : {
            textAlign: 'center'
        },

        card2 : {
            height: '5vh',
            marginTop:'2%'
        }

    })
    const classes = useStyles();
    

    return (
    <div className = "LoginWrapper">
        <div className="LoginCard">
                <Card variant='outlined'>
                    <div className='insta-logo'>
                        <img src = {insta} alt=''/>
                    </div>
                <CardContent>
                <Typography className = {classes.text1} variant="subtitle1">
                    Sign up to see photos and videos from your friends
                </Typography>
                {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense"size="small"/>
                <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense"size="small"/>
                <Button size="small" color="secondary" fullWidth={true} variant='outlined' margin='dense' startIcon={<CloudUploadIcon />} component="label">
                Upload Profile Image
                <input type = "file" accept = "image/*" hidden/>
                </Button>
                </CardContent>
            <CardActions>
                <Button color="primary" fullWidth={true} variant='contained'>
                Sign up
                </Button>
            </CardActions>
            <CardContent>
                <Typography className = {classes.text1} variant="subtitle1">
                    By signing up, you agree to our Terms, Condition and Cookies policy.
                </Typography>
            </CardContent>
            </Card>

                <Card variant='outlined' className={classes.card2}>
                    <CardContent>
                        <Typography className = {classes.text1} variant="subtitle1">
                            Having an account ? <Link to='/login' style={{textDecoration:'none'}}>Login</Link>
                        </Typography>
                    </CardContent>
                </Card>
        </div>

        <div className="LoginCard">
                <Card variant='outlined'>
                    <div className='insta-logo'>
                        <img src = {insta} alt=''/>
                    </div>
                <CardContent>
                {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense"size="small"/>
                <Typography className={classes.text2} color="primary" variant="subtitle1">
                    Forgot password ?
                </Typography>
                </CardContent>
            <CardActions>
                <Button color="primary" fullWidth={true} variant='contained'>
                Log in
                </Button>
            </CardActions>
            </Card>

                <Card variant='outlined' className={classes.card2}>
                    <CardContent>
                        <Typography className = {classes.text1} variant="subtitle1">
                            Don't have an account ? <Link to='/signup' style={{textDecoration:'none'}}>Sign up</Link>
                        </Typography>
                    </CardContent>
                </Card>
        </div>
    </div>
  );
}