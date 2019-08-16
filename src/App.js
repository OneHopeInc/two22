import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Prayer from './Prayer'
import Gospel from './Gospel'
import Layout from './Components/Layout'
import Login from './LogIn'

import axios from 'axios'
import * as Constants from './constants'

function App() {
  const [state, setState] = React.useState({
    authenticatedUser: {},
    isAuthenticated: false,
    statistics: {}
  })

  // // // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let user = JSON.parse(window.localStorage.getItem('CAYM_user'))
    if (user) {
      setState({
        authenticatedUser: {
          email: user.email,
          phoneNumber: user.phoneNumber
        },
        isAuthenticated: true
      })

      let identity = {
        email: user.email,
        phoneNumber: user.phoneNumber,
        securityKey: Constants.securityKey
      }

      axios.defaults.headers['Content-Type'] =
        'application/x-www-form-urlencoded'

      axios
        .post(Constants.url + '/statistics', {
          identity
        })
        .then(function(res) {
          if (res === 200) {
            setState({
              statistics: JSON.parse(res.data)
            })
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }, [])

  return state.isAuthenticated ? (
    <Router>
      <div className="App">
        <Layout>
          <Route
            path="/"
            exact
            render={props => (
              <Gospel
                {...props}
                user={state.authenticatedUser}
                stats={state.statistics}
              />
            )}
          />
          <Route
            path="/prayer/"
            render={props => (
              <Prayer
                {...props}
                user={state.authenticatedUser}
                stats={state.statistics}
              />
            )}
          />
        </Layout>
      </div>
    </Router>
  ) : (
    <Login />
  )
}

export default App
