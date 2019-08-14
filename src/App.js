import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Prayer from './Prayer'
import Gospel from './Gospel'
import Layout from './Components/Layout'
import Login from './LogIn'

import axios from 'axios'
import * as Constants from './constants'

import * as Reducers from './reducers'

const UserContext = React.createContext()

function App() {
  const [state, dispatch] = React.useReducer(
    Reducers.reducer,
    Reducers.initialState
  )

  // // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {

  // })

  return (
    <UserContext.Provider value={Reducers.initialState}>
      <UserContext.Consumer>
        {user =>
          user.isAuthenticated ? (
            <Router>
              <div className="App">
                <Layout>
                  <Route
                    path="/"
                    exact
                    render={props => <Gospel {...props} UserContext={user} />}
                  />
                  <Route
                    path="/prayer/"
                    render={props => <Prayer {...props} UserContext={user} />}
                  />
                </Layout>
              </div>
            </Router>
          ) : (
            <Login />
          )
        }
      </UserContext.Consumer>
    </UserContext.Provider>
  )
}

export default App
