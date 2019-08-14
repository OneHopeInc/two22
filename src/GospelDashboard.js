import React, { useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import './App.css'
import Tajikistan from './assets/Tajikistan.png'
import Kyrgyzstan from './assets/Kyrgyzstan.png'
import Turkmenistan from './assets/Turkmenistan.png'
import Uzbekistan from './assets/Uzbekistan.png'
import Kazakhstan from './assets/Kazakhstan.png'

const Stats = props => <span style={{ color: '#9e9e9e' }}> {props.text} </span>

function GospelDashboard() {
  return (
    <div>
      <h3>Gospel Dashboard </h3>
      <hr />
      <h5>Gospel Presentations By Country</h5>
      <List>
        <ListItem>
          <ListItemAvatar>
            <img
              src={Tajikistan}
              alt="Tajikistan"
              className="flag countryFlag2"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Tajikistan"
            secondary={<Stats text="Jan 7, 2014" />}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <img
              src={Kyrgyzstan}
              alt="Kyrgyzstan"
              className="flag countryFlag2"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Kyrgyzstan"
            secondary={<Stats text="Jan 7, 2014" />}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <img
              src={Turkmenistan}
              alt="Turkmenistan"
              className="flag countryFlag2"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Turkmenistan"
            secondary={<Stats text="Jan 7, 2014" />}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <img
              src={Uzbekistan}
              alt="Uzbekistan"
              className="flag countryFlag2"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Uzbekistan"
            secondary={<Stats text="Jan 7, 2014" />}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <img
              src={Kazakhstan}
              alt="Kazakhstan"
              className="flag countryFlag2"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Kazakhstan"
            secondary={<Stats text="Jan 7, 2014" />}
          />
        </ListItem>
      </List>
    </div>
  )
}

export default GospelDashboard
