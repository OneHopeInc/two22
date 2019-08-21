import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SimpleBottomNavigation from './BottomNavigation'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Theme from './Theme'
import { MuiThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

function Layout(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleLogout() {
    localStorage.removeItem('CAYM_user')
    window.location.reload()
  }

  function handleTranslate() {
    window.location.assign('https://caym.netlify.com')
  }

  return (
    <MuiThemeProvider theme={Theme}>
      <div className="Layout">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <MenuItem onClick={handleTranslate}>Russian</MenuItem>
              </Menu>
              <Typography variant="h6" className={classes.title}>
                CAYM
              </Typography>
              <Button color="inherit" />
            </Toolbar>
          </AppBar>
          <div className="mainContent">{props.children}</div>

          <SimpleBottomNavigation />
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default Layout
