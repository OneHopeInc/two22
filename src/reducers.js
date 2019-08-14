import * as Constants from './constants'

var today = new Date()

export const initialState = {
  identity: {
    email: '',
    phoneNumber: ''
  },
  KGpresentations: 0,
  KGprayer: false,
  KZpresentations: 0,
  KZprayer: false,
  TJpresentations: 0,
  TJprayer: false,
  TMpresentations: 0,
  TMprayer: false,
  UZpresentations: 0,
  UZprayer: false,
  date: today,
  isAuthenticated: true
}

export function reducer(state, action) {
  var newState = state
  switch (action.type) {
    case 'loginUser':
      return {
        ...state,
        isAuthenticated: action.payload.authenticated,
        identity: {
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber
        }
      }
    case 'prayerLog':
      if (action.payload.countryCode === 'KG') {
        newState.KGprayer = action.payload.checked
        return { ...newState }
      } else if (action.payload.countryCode === 'KZ') {
        newState.KZprayer = action.payload.checked
        return { ...newState }
      } else if (action.payload.countryCode === 'TJ') {
        newState.TJprayer = action.payload.checked
        return { ...newState }
      } else if (action.payload.countryCode === 'TM') {
        newState.TMprayer = action.payload.checked
        return { ...newState }
      } else if (action.payload.countryCode === 'UZ') {
        newState.UZprayer = action.payload.checked
        return { ...newState }
      }
      return state
    case 'gospelLog':
      if (action.payload.countryCode === 'KG') {
        newState.KGpresentations = action.payload.number
        return { ...newState }
      } else if (action.payload.countryCode === 'KZ') {
        newState.KZpresentations = action.payload.number
        return { ...newState }
      } else if (action.payload.countryCode === 'TJ') {
        newState.TJpresentations = action.payload.number
        return { ...newState }
      } else if (action.payload.countryCode === 'TM') {
        newState.TMpresentations = action.payload.number
        return { ...newState }
      } else if (action.payload.countryCode === 'UZ') {
        newState.UZpresentations = action.payload.number
        return { ...newState }
      }
      return state
    case 'submit':
      return { count: state.count - 1 }
    default:
      return state
  }
}
