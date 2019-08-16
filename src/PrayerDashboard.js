import React from 'react'
import './App.css'
import Layout from './Components/Layout'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

function PrayerDashboard(props) {
  return (
    <div>
      <h3>Prayer Dashboard </h3>
      <hr />

      {props.countries ? (
        <div>
          <List>
            {props.countries.map(country => (
              <ListItem>
                <ListItemAvatar>
                  <img
                    src={country.countryCode}
                    alt={country.countryCode}
                    className="flag countryFlag2"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={country.countryCode}
                  secondary={
                    <span style={{ color: '#9e9e9e' }}>
                      {' '}
                      Day: {country.presentations.day}, Week:{' '}
                      {country.presentations.week}, Month:{' '}
                      {country.presentations.month}, Year:{' '}
                      {country.presentations.year}, Total:{' '}
                      {country.presentations.total}
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
