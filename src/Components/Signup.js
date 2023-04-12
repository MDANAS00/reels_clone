import * as React from 'react';
import { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Input } from '@mui/material';
import { createUseStyles } from 'react-jss';
import './Signup.css';
import insta from '../Assets/Instagram.jpeg';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link,useNavigate} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


export default function Signup() {
    const useStyles = createUseStyles({
        text1 : {
            color : 'grey',
            textAlign : 'center'
        },

        card2 : {
            height: '5vh',
            marginTop:'2%'
        }
    })
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [file,setFile] = useState(null);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState('');
    const history = useNavigate();
    const {signup} = useContext(AuthContext);

    const handleClick = async() => {
        if(file == null){
            setError("Please upload profile image first");
            setTimeout(()=>{
                setError('')
            },2000)
            return;
        }
        try{
            let userObj = await signup(email,password)
            let uid = userObj.user.uid
            console.log(uid);
        }catch(error){
            setError(error);
            console.log('HELLO');
            setTimeout(()=>{
                setError('')
            },2000)
        }
    }

    return (
    <div className = "signupWrapper">
        <div className="signupCard">
                <Card variant='outlined'>
                    <div className='insta-logo'>
                        <img src = {insta} alt=''/>
                    </div>
                <CardContent>
                <Typography className = {classes.text1} variant="subtitle1">
                    Sign up to see photos and videos from your friends
                </Typography>
                {error != '' && <Alert severity="error">{error}</Alert>}
                        <TextField id="outlined-basic" label="Email" type ='email' variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" fullWidth={true} margin="dense"size="small" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense"size="small" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Button size="small" color="secondary" fullWidth={true} variant='outlined' margin='dense' startIcon={<CloudUploadIcon />} component="label">
                    Upload Profile Image
                    <input type = "file" accept = "image/*" hidden onChange={(e)=>setFile(e.target.files[0])}/>
                    </Button>
                </CardContent>
            <CardActions>
                <Button color="primary" fullWidth={true} variant='contained' disable={loading} onClick={handleClick}>
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
    </div>
  );
}