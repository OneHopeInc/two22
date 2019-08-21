import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { grey } from '@material-ui/core/colors'

import PrayerIcon from '../assets/prayerIcon.png'
import BibleIcon from '../assets/bibleIcon.png'

import '../App.css'

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#000',
    position: 'fixed',
    bottom: 0,
    paddingBottom: 25
  },
  content: {
    color: '#fff'
  },
  selected: {
    backgroundColor: grey[900],
    color: '#fff'
  }
})

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('gospel')

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
      color="primary"
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Благовестие"
        value="gospel"
        icon={<img alt="gospel" src={BibleIcon} className="iconImg" />}
        classes={{
          root: classes.content, // class name, e.g. `classes-nesting-root-x`
          selected: classes.selected // class name, e.g. `classes-nesting-label-x`
        }}
      />
      <BottomNavigationAction
        component={Link}
        to="/prayer"
        label="Молитва"
        value="prayer"
        icon={<img alt="prayer" src={PrayerIcon} className="iconImg" />}
        classes={{
          root: classes.content, // class name, e.g. `classes-nesting-root-x`
          selected: classes.selected // class name, e.g. `classes-nesting-label-x`
        }}
      />
    </BottomNavigation>
  )
}
