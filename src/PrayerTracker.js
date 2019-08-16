import React from 'react'
import './App.css'

import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

import Tajikistan from './assets/Tajikistan.png'
import Kyrgyzstan from './assets/Kyrgyzstan.png'
import Turkmenistan from './assets/Turkmenistan.png'
import Uzbekistan from './assets/Uzbekistan.png'
import Kazakhstan from './assets/Kazakhstan.png'

import axios from 'axios'

import * as Constants from './constants'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />)

const Label = props => (
  <span style={{ paddingRight: props.padding }}> {props.text}</span>
)

function GospelTracker(props) {
  const [state, setState] = React.useState({
    KG: false,
    KZ: false,
    TJ: false,
    TM: false,
    UZ: false,
    isSubmitted: false
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  const submitPrayer = () => {
    let countryData = [
      { countryCode: 'KG', prayer: state.KG },
      { countryCode: 'KZ', prayer: state.KZ },
      { countryCode: 'TJ', prayer: state.TJ },
      { countryCode: 'TM', prayer: state.TM },
      { countryCode: 'UZ', prayer: state.UZ }
    ]

    let identity = {
      email: props.user.email,
      phoneNumber: props.user.phoneNumber,
      securityKey: Constants.securityKey
    }

    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    axios
      .post(Constants.url + '/prayer', {
        identity,
        countryData
      })
      .then(function(res) {
        if (res.status === 200) {
          setState({
            isSubmitted: true
          })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  return (
    <div>
      <h3>Prayer Tracker </h3>
      <hr />
      <div className="listContainer">
        <FormGroup row className="form-row-2">
          <img src={Kyrgyzstan} alt="Kyrgyzstan" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.KG}
                  onChange={handleChange('KG')}
                  state="KG"
                  inputProps={{ 'aria-label': 'Kyrgyzstan' }}
                />
              }
              label={<Label text="Kyrgyzstan" padding={80} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row-2">
          <img src={Kazakhstan} alt="Kazakhstan" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.KZ}
                  onChange={handleChange('KZ')}
                  state="KZ"
                  inputProps={{ 'aria-label': 'Kazakhstan' }}
                />
              }
              label={<Label text="Kazakhstan" padding={73} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row-2">
          <img src={Tajikistan} alt="Tajikistan" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.TJ}
                  onChange={handleChange('TJ')}
                  state="TJ"
                  inputProps={{ 'aria-label': 'Tajikistan' }}
                />
              }
              label={<Label text="Tajikistan" padding={90} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row-2">
          <img
            src={Turkmenistan}
            alt="Turkmenistan"
            className="flag countryFlag"
          />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.TM}
                  onChange={handleChange('TM')}
                  state="TM"
                  inputProps={{ 'aria-label': 'Turkmenistan' }}
                />
              }
              label={<Label text="Turkmenistan" padding={60} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row-2">
          <img src={Uzbekistan} alt="Uzbekistan" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.UZ}
                  onChange={handleChange('UZ')}
                  state="UZ"
                  inputProps={{ 'aria-label': 'Uzbekistan' }}
                />
              }
              label={<Label text="Uzbekistan" padding={78} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>
      </div>
      <br />
      {state.isSubmitted ? (
        <Button variant="contained" color="primary" disabled>
          Submitted Succesfully!
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => submitPrayer()}
        >
          Submit
        </Button>
      )}
    </div>
  )
}

export default GospelTracker
