import React, { useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

import './App.css'

function GospelDashboard(props) {
  function getImage(code) {
    if (code === 'TJ') {
      return (
        <img
          src={require('./assets/Tajikistan.png')}
          alt={code}
          className="flag countryFlag2"
        />
      )
    } else if (code === 'KG') {
      return (
        <img
          src={require('./assets/Kyrgyzstan.png')}
          alt={code}
          className="flag countryFlag2"
        />
      )
    } else if (code === 'TM') {
      return (
        <img
          src={require('./assets/Turkmenistan.png')}
          alt={code}
          className="flag countryFlag2"
        />
      )
    } else if (code === 'UZ') {
      return (
        <img
          src={require('./assets/Uzbekistan.png')}
          alt={code}
          className="flag countryFlag2"
        />
      )
    } else if (code === 'KZ') {
      return (
        <img
          src={require('./assets/Kazakhstan.png')}
          alt={code}
          className="flag countryFlag2"
        />
      )
    }
  }
  return (
    <div>
      <h3>Gospel Dashboard </h3>
      <hr />
      <h5>Gospel Presentations By Country</h5>

      {props.stats.countries ? (
        <div>
          <List>
            {props.stats.countries.map((country, id) => (
              <ListItem key={id}>
                <ListItemAvatar>{getImage(country.countryCode)}</ListItemAvatar>
                <ListItemText
                  primary={country.countryCode}
                  secondary={
                    <span style={{ color: '#9e9e9e' }}>
                      {' '}
                      Day: {country.presentations.day} <br />
                      Week: {country.presentations.week} <br />
                      Month: {country.presentations.month} <br />
                      Year: {country.presentations.year} <br />
                      Total: {country.presentations.total}
                    </span>
                  }
                />
              </ListItem>
            ))}
          </List>

          <div>
            <h3> Presention Goal: {props.stats.presentationGoal}</h3>
          </div>
        </div>
      ) : (
        <div>No Data Available</div>
      )}
    </div>
  )
}

export default GospelDashboard
