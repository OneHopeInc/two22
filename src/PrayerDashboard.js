import React from 'react'
import './App.css'
import Layout from './Components/Layout'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

function PrayerDashboard(props) {
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
      <h3>Prayer Dashboard </h3>
      <hr />

      {props.stats.countries ? (
        <div>
          <List>
            {props.stats.countries.map((country, id) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  {getImage(country.countryCode)}{' '}
                </ListItemAvatar>
                <ListItemText
                  primary={country.countryCode}
                  secondary={
                    <span style={{ color: '#9e9e9e' }}>
                      {' '}
                      {/* Day: {country.prayer.day} <br /> */}
                      Week: {country.prayer.week} <br />
                      Month: {country.prayer.month} <br />
                      Year: {country.prayer.year} <br />
                      Total: {country.prayer.total}
                    </span>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <div>No Data Available</div>
      )}
    </div>
  )
}

export default PrayerDashboard
