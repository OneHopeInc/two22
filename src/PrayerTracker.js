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
import * as Reducers from './reducers'

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

function GospelTracker() {
  const [state, dispatch] = React.useReducer(
    Reducers.reducer,
    Reducers.initialState
  )

  const [values, setValue] = React.useState({
    KG: false,
    KZ: false,
    TJ: false,
    TM: false,
    UZ: false
  })

  const handleChange = name => event => {
    setValue({ ...values, [name]: event.target.checked })
  }

  const submitPrayer = () => {
    let data = [
      { countryCode: 'KG', prayer: values.KG },
      { countryCode: 'KZ', prayer: values.KZ },
      { countryCode: 'TJ', prayer: values.TJ },
      { countryCode: 'TM', prayer: values.TM },
      { countryCode: 'UZ', prayer: values.UZ }
    ]

    let countryData = JSON.stringify(data)
    console.log(countryData)

    // axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // axios.defaults.withCredentials = true

    // axios
    //   .post(Constants.url + '/data', {
    //     countryData
    //   })
    //   .then(function(res) {
    //     console.log(res)
    //     if (res === '200') {
    //       dispatch({
    //         type: 'gospelSubmitted',
    //         payload: {
    //           gospelSubmitted: true
    //         }
    //       })
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
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
                  checked={values.KG}
                  onChange={handleChange('KG')}
                  value="KG"
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
                  checked={values.KZ}
                  onChange={handleChange('KZ')}
                  value="KZ"
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
                  checked={values.TJ}
                  onChange={handleChange('TJ')}
                  value="TJ"
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
                  checked={values.TM}
                  onChange={handleChange('TM')}
                  value="TM"
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
                  checked={values.UZ}
                  onChange={handleChange('UZ')}
                  value="UZ"
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
      <Button
        variant="contained"
        color="secondary"
        onClick={() => submitPrayer()}
      >
        Submit
      </Button>
    </div>
  )
}

export default GospelTracker
