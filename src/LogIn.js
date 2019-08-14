import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/ContactPhone'
import { MuiThemeProvider } from '@material-ui/core/styles'
import axios from 'axios'

import Theme from './Components/Theme'
import * as Constants from './constants'
import * as Reducers from './reducers'
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

function Login() {
  const [state, dispatch] = React.useReducer(
    Reducers.reducer,
    Reducers.initialState
  )
  const classes = useStyles()

  const [values, setValues] = React.useState({
    email: '',
    phoneNumber: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const signIn = () => {
    let userString = JSON.stringify({
      email: values.email,
      phoneNumber: values.phoneNumber,
      securityKey: Constants.securityKey
    })

    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.withCredentials = true

    axios
      .post(Constants.url + '/register', {
        email: values.email,
        phoneNumber: values.phoneNumber,
        securityKey: Constants.securityKey
      })
      .then(function(res) {
        console.log(res)
        if (res === '200') {
          dispatch({
            type: 'loginUser',
            payload: {
              authenticated: true,
              email: values.email,
              phoneNumber: values.phoneNumber
            }
          })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  return (
    <MuiThemeProvider theme={Theme}>
      <div className="appBkg">
        <h1 className="appName">
          Central Asia <br />
          Youth Movement
        </h1>
        <div className="login-form">
          <h3> Welcome, Login!</h3>

          <form className={classes.container} noValidate>
            <Paper className={classes.root}>
              <TextField
                id="outlined-name"
                label="Email"
                className={classes.textField}
                value={values.email}
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
                value={values.phoneNumber}
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
        <p>Powered by TWO22</p>
      </div>
    </MuiThemeProvider>
  )
}

export default Login
