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
    let user = localStorage.getItem('CAYM_user')
    if (user) {
      user = JSON.parse(user)
      axios.defaults.headers['Content-Type'] =
        'application/x-www-form-urlencoded'

      axios
        .post(Constants.url + '/statistics', {
          email: user.email,
          phoneNumber: user.phoneNumber,
          securityKey: Constants.securityKey
        })
        .then(function(res) {
          if (res.status === 200) {
            console.log(res.data)
            setState({
              statistics: res.data,
              authenticatedUser: {
                email: user.email,
                phoneNumber: user.phoneNumber
              },
              isAuthenticated: true
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
