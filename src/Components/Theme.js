import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#9e9e9e'
    }
    // error: will use the default color
  },
  typography: {
    color: '#fff'
  }
})

export default Theme
