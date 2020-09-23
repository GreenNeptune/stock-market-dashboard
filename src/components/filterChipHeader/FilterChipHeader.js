import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import BoxHeader from '../boxHeader/BoxHeader';
import theme from '../../theme';


const useStyles = makeStyles((theme) => ({
  chip: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100px',
    border: `1px solid ${theme.palette.primary.main}`,
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.75),
    borderRadius: 0,
    color: theme.palette.primary.main
  },
}));

export default () => {

  const classes = useStyles();

  return (
    <BoxHeader display="flex" alignItems="center" >
      <Box color={theme.palette.primary.main} mr={2} >
        <Typography>FILTERS APPLIED :</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.chip}>
        <Box >
          <Typography>Filter</Typography>
        </Box>
        <Box>x</Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.chip}>
        <Box>
          <Typography> Filter</Typography>
        </Box>
        <Box>x</Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.chip}>
        <Box>
          <Typography>Filter</Typography>
        </Box>
        <Box>x</Box>
      </Box>
    </BoxHeader>
  );
}