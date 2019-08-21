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

function GospelTracker(props) {
  const [state, setState] = React.useState({
    KG: 0,
    KZ: 0,
    TJ: 0,
    TM: 0,
    UZ: 0,
    isSubmitted: false
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value })
  }

  const submitGospel = () => {
    let countryData = [
      { countryCode: 'KG', presentations: state.KG },
      { countryCode: 'KZ', presentations: state.KZ },
      { countryCode: 'TJ', presentations: state.TJ },
      { countryCode: 'TM', presentations: state.TM },
      { countryCode: 'UZ', presentations: state.UZ }
    ]

    let identity = {
      email: props.user.email,
      phoneNumber: props.user.phoneNumber,
      securityKey: Constants.securityKey
    }

    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    axios
      .post(Constants.url + '/presentations', {
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
      <h3>Трекер благовестий </h3>
      <hr />
      <div className="listContainer">
        <FormGroup row className="form-row">
          <img src={Kyrgyzstan} alt="Кыргызстан" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={state.KG}
                  onChange={handleChange('KG')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Кыргызстан' }}
                />
              }
              label={<Label text="Кыргызстан" padding={70} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row">
          <img src={Kazakhstan} alt="Казахстан" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={state.KZ}
                  onChange={handleChange('KZ')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Кыргызстан' }}
                />
              }
              label={<Label text="Казахстан" padding={85} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row">
          <img
            src={Tajikistan}
            alt="Таджикистан"
            className="flag countryFlag"
          />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={state.TJ}
                  onChange={handleChange('TJ')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Таджикистан' }}
                />
              }
              label={<Label text="Таджикистан" padding={60} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row">
          <img
            src={Turkmenistan}
            alt="Туркменистан"
            className="flag countryFlag"
          />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={state.TM}
                  onChange={handleChange('TM')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Туркменистан' }}
                />
              }
              label={<Label text="Туркменистан" padding={55} />}
              labelPlacement="start"
            />
          </FormControl>
        </FormGroup>

        <FormGroup row className="form-row">
          <img src={Uzbekistan} alt="Узбекистан" className="flag countryFlag" />
          <FormControl margin="dense">
            <FormControlLabel
              control={
                <GreenTextField
                  id="outlined-number"
                  label="Number"
                  value={state.UZ}
                  onChange={handleChange('UZ')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
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
          Submitted Succesfully!
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => submitGospel()}
        >
          Отправить
        </Button>
      )}
    </div>
  )
}

export default GospelTracker
