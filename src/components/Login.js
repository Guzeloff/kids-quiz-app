
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import moment from "moment"

//store
import {connect} from 'react-redux'
import { useSelector , useDispatch } from 'react-redux'


//auth
import {auth,db} from '../firebase'

import {Link , useHistory} from 'react-router-dom'
import './Login.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/">
        Kido
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  container : {
    backgroundColor : 'rgba(240, 122, 142, 0.2)'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {


    const classes = useStyles();
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const dispatch = useDispatch()


  const login = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => { 
      
      db.collection('parent').doc(auth.user.uid).collection('quizResults').get().then((snapshot) => {

          //everytime database changes take a picture "snapshot"  //if we use get() it gets only once
              //set the new state with setPeople
            if(snapshot.docs.map(doc => doc.data()) != null){
              dispatch({
                type : 'USER_RESULTS',
                payload :snapshot.docs.map(doc => doc.data())
            })
          }
      })
      //  const results = db.collection('parent').doc(auth.user.uid).collection('quizResults').get(snapshot => { 
      //       //everytime database changes take a picture "snapshot" 
      //       //set the new state with setPeople
      //       if(snapshot.docs.map(doc => doc.data()) != null){
      //           dispatch({
      //             type : 'USER_RESULTS',
      //             payload :snapshot.docs.map(doc => doc.data())
      //         })
      //       }
           
      //   })
      
      history.push("/")
    })
    .catch(e=> alert(e.message))
  }

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then(auth =>{
       db.collection('parent').doc(auth.user.uid).set({

       })
    })
    .catch(e=> alert(e.message))
  }

  return (
    <div className="container_body">
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

          <Link className="login_link" to="/">
          <img className="logo" src="https://i.pinimg.com/originals/71/d6/c3/71d6c35dde4eb984d288ffada8222f3d.png" alt="" />
          <h3 className="landingpage__title">KIDO</h3>
          </Link>
        <Typography component="h1" variant="h5">
          Најави се
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="е-маил"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="лозинка"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомни ме?"
          />
          <Button

            onClick={login}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
              <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Button
              onClick={register}
              fullWidth
              variant="contained"
                color="secondary"
                >
                    Регистрирај се
                </Button>
            </Grid>
          </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}




export default connect()(Login);