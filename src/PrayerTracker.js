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
      <h3>Трекер молитв </h3>
      <hr />
      <div className="listContainer">
        <FormGroup row className="form-row-2">
          <img src={Kyrgyzstan} alt="Кыргызстан" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.KG}
                  onChange={handleChange('KG')}
                  state="KG"
                  inputProps={{ 'aria-label': 'Кыргызстан' }}
                />
              }
              label={<Label text="Кыргызстан" padding={70} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row-2">
          <img src={Kazakhstan} alt="Казахстан" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.KZ}
                  onChange={handleChange('KZ')}
                  state="KZ"
                  inputProps={{ 'aria-label': 'Казахстан' }}
                />
              }
              label={<Label text="Казахстан" padding={85} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row-2">
          <img
            src={Tajikistan}
            alt="Таджикистан"
            className="flag countryFlag"
          />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.TJ}
                  onChange={handleChange('TJ')}
                  state="TJ"
                  inputProps={{ 'aria-label': 'Таджикистан' }}
                />
              }
              label={<Label text="Таджикистан" padding={60} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row-2">
          <img
            src={Turkmenistan}
            alt="Туркменистан"
            className="flag countryFlag"
          />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.TM}
                  onChange={handleChange('TM')}
                  state="TM"
                  inputProps={{ 'aria-label': 'Туркменистан' }}
                />
              }
              label={<Label text="Туркменистан" padding={55} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row-2">
          <img src={Uzbekistan} alt="Узбекистан" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.UZ}
                  onChange={handleChange('UZ')}
                  state="UZ"
                  inputProps={{ 'aria-label': 'Узбекистан' }}
                />
              }
              label={<Label text="Узбекистан" padding={75} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>
      </div>
      <br />
      {state.isSubmitted ? (
        <Button variant="contained" color="primary" disabled>
          Отправлено успешно
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => submitPrayer()}
        >
          Отправить
        </Button>
      )}
    </div>
  )
}

export default GospelTracker
