import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// A custom theme for this app
const theme = createMuiTheme({

  palette: {
    primary: {
      main: colors.blueGrey[200],
    },
    secondary: {
      main: colors.red[500],
    },
    background: {
      default: colors.blueGrey[800],
      paper: colors.blueGrey[900],
    },
    status: {
      active: colors.green[400],
      canceled: colors.red[400],
      info: colors.blue[500],
      warning: 'yellow',
      error: 'red'
    },
    text: {
      primary: colors.blueGrey[200],
      secondary: colors.blueGrey[50]
    },
    action: {
      selected: ' rgba(0, 0, 0, 0.4)'
    },
    success: {
      main: colors.green[400]
    },
    typography: {
      button: colors.cyan[300]
    },
  },
});

export default theme;