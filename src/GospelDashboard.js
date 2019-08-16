import React, { useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

import './App.css'
import TJ from './assets/Tajikistan.png'
import KG from './assets/Kyrgyzstan.png'
import TM from './assets/Turkmenistan.png'
import UZ from './assets/Uzbekistan.png'
import KZ from './assets/Kazakhstan.png'

function GospelDashboard(props) {
  return (
    <div>
      <h3>Gospel Dashboard </h3>
      <hr />
      <h5>Gospel Presentations By Country</h5>

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

          <div>
            <h3> Presention Goal: {props.presentationGoal}</h3>
          </div>
        </div>
      ) : (
        <div>No Data Available</div>
      )}
    </div>
  )
}

export default GospelDashboard
