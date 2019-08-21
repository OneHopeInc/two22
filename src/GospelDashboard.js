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

  function currentTotal() {
    var total = 0
    for (var i = 0; i < props.stats.countries.length; i++) {
      total += props.stats.countries[i].presentations.total
    }
    return total
  }

  return (
    <div>
      <h3>Панель Благовестие </h3>
      <hr />
      <h5>Презентации Евангелия по странам</h5>

      {props.stats.countries ? (
        <div>
          <div>
            <h3>
              {' '}
              Достигаемая цель: {currentTotal()}/{props.stats.presentationGoal}
            </h3>
          </div>
          <List>
            {props.stats.countries.map((country, id) => (
              <ListItem key={id}>
                <ListItemAvatar>{getImage(country.countryCode)}</ListItemAvatar>
                <ListItemText
                  primary={country.countryCode}
                  secondary={
                    <span style={{ color: '#9e9e9e' }}>
                      {' '}
                      День: {country.presentations.day} <br />
                      Неделя: {country.presentations.week} <br />
                      Месяц: {country.presentations.month} <br />
                      Год: {country.presentations.year} <br />
                      Всего: {country.presentations.total}
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

export default GospelDashboard
