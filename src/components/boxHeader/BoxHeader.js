import React from 'react'
import { Box } from '@material-ui/core'
import theme from '../../theme';

export default ({ children, ...rest }) => {

  return (
    <Box p={1} bgcolor={theme.palette.background.default} borderBottom={1} borderColor="text.primary" {...rest}>
      {children}
    </Box>
  )
}