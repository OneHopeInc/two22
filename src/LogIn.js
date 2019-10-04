import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles'
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

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'white'
    },
    '& label': {
      color: 'white'
    },
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    }
  }
})(TextField)

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
            errorMsg:
              'Адрес электронной почты или номер телефона отсутствует или недействителен'
          })
        } else if (error.message === 'Request failed with status code 404') {
          setstate({
            ...state,
            isError: true,
            errorMsg:
              'Сервер временно недоступен. Пожалуйста, повторите попытку через несколько минут.'
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
            <CssTextField
              id="outlined-name"
              label="Эл. адрес"
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
            <CssTextField
              id="outlined-name"
              label="Телефон"
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
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => signIn()}
            >
              Авторизоваться
            </Button>
          </form>
        </div>
        <p>Powered by TWO22</p>
        <img src={two22} alt="TWO22" className="two22_logo" />
      </div>
    </MuiThemeProvider>
  )
}

export default Login
