import React from 'react'
import './App.css'

import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
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

const GreenTextField = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    },
    width: 40,
    padding: 2,
    textAlign: 'center',
    marginLeft: 20
  }
})(props => (
  <Paper>
    <Input color="default" {...props} />
  </Paper>
))

const Label = props => (
  <span style={{ paddingRight: props.padding }}> {props.text}</span>
)

function GospelTracker() {
  const [state, dispatch] = React.useReducer(
    Reducers.reducer,
    Reducers.initialState
  )
  // console.log('state', state)
  const [values, setValue] = React.useState({
    KG: 0,
    KZ: 0,
    TJ: 0,
    TM: 0,
    UZ: 0
  })

  const handleChange = name => event => {
    setValue({ ...values, [name]: event.target.value })
  }

  const submitGospel = () => {
    let data = [
      { countryCode: 'KG', presentations: values.KG },
      { countryCode: 'KZ', presentations: values.KZ },
      { countryCode: 'TJ', presentations: values.TJ },
      { countryCode: 'TM', presentations: values.TM },
      { countryCode: 'UZ', presentations: values.UZ }
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
      <h3>Gospel Tracker </h3>
      <hr />
      <div className="listContainer">
        <FormGroup row className="form-row">
          <img src={Kyrgyzstan} alt="Kyrgyzstan" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={values.KG}
                  onChange={handleChange('KG')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Kyrgyzstan' }}
                />
              }
              label={<Label text="Kyrgyzstan" padding={80} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row">
          <img src={Kazakhstan} alt="Kazakhstan" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={values.KZ}
                  onChange={handleChange('KZ')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Kyrgyzstan' }}
                />
              }
              label={<Label text="Kazakhstan" padding={75} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row">
          <img src={Tajikistan} alt="TJ" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={values.TJ}
                  onChange={handleChange('TJ')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Tajikistan' }}
                />
              }
              label={<Label text="Tajikistan" padding={90} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row">
          <img
            src={Turkmenistan}
            alt="Turkmenistan"
            className="flag countryFlag"
          />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={values.TM}
                  onChange={handleChange('TM')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Turkmenistan' }}
                />
              }
              label={<Label text="Turkmenistan" padding={60} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row">
          <img src={Uzbekistan} alt="Uzbekistan" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={values.UZ}
                  onChange={handleChange('UZ')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
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
        onClick={() => submitGospel()}
      >
        Submit
      </Button>
    </div>
  )
}

export default GospelTracker
