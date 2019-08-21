import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/ContactPhone'
import { MuiThemeProvider } from '@material-ui/core/styles'
import axios from 'axios'

import logo from './assets/CentralAsia.png'
import two22 from './assets/two22.png'
import Theme from './Components/Theme'
import * as Constants from './constants'
import './App.css'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 14,
    padding: '2px',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    margin: 'auto',
    marginTop: 40
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 10,
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '90%',
    color: '#fff'
  },
  dense: {
    marginTop: theme.spacing(2)
  }
}))

function Login(props) {
  const classes = useStyles()

  const [state, setstate] = React.useState({
    email: '',
    phoneNumber: '',
    isAuthenticated: false,
    isError: false
  })

  const handleChange = name => event => {
    setstate({ ...state, [name]: event.target.value })
  }

  const signIn = () => {
    let userString = JSON.stringify({
      email: state.email,
      phoneNumber: state.phoneNumber
    })

    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // axios.defaults.withCredentials = true

    axios
      .post(Constants.url + '/register', {
        email: state.email,
        phoneNumber: state.phoneNumber,
        securityKey: Constants.securityKey
      })
      .then(function(res) {
        if (res.status === 200) {
          localStorage.setItem('CAYM_user', userString)
          window.location.reload()
        }
      })
      .catch(function(error) {
        if (error.message === 'Request failed with status code 400') {
          setstate({
            ...state,
            isError: true,
            errorMsg: 'The email or phone number is missing or invalid.'
          })
        } else if (error.message === 'Request failed with status code 404') {
          setstate({
            ...state,
            isError: true,
            errorMsg:
              'The server is temporarily unavailable. Please try again in a few minutes.'
          })
        }
      })
  }
  return (
    <MuiThemeProvider theme={Theme}>
      <div className="appBkg">
        <img src={logo} alt="Central Asia Youth Movement" />
        <h1 className="appName">
          Central Asia <br />
          Youth Movement
        </h1>
        <div className="login-form">
          <h3> Welcome, Login!</h3>
          {state.isError ? (
            <div style={{ color: '#FF0000' }}>{state.errorMsg}</div>
          ) : (
            ''
          )}

          <a href="https://caymeng.netlify.com" className="custom-link">
            {' '}
            In English
          </a>

          <form className={classes.container} noValidate>
            <Paper className={classes.root}>
              <TextField
                id="outlined-name"
                label="Email"
                className={classes.textField}
                value={state.email}
                onChange={handleChange('email')}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                  'aria-label': 'Email'
                }}
              />
            </Paper>
            <Paper className={classes.root}>
              <TextField
                id="outlined-name"
                label="Phone"
                className={classes.textField}
                value={state.phoneNumber}
                onChange={handleChange('phoneNumber')}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                  'aria-label': 'Phone Number'
                }}
              />
            </Paper>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => signIn()}
            >
              Login
            </Button>
          </form>
        </div>
        <p>Powered by</p>
        <img src={two22} alt="TWO22" className="two22_logo" />
      </div>
    </MuiThemeProvider>
  )
}

export default Login
