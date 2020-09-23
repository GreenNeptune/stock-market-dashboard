import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import { Button, Typography, colors, Paper, Box, Grid, Chip } from '@material-ui/core';
import { SwapHoriz, TrendingDown, TrendingUp } from '@material-ui/icons';
import BoxHeader from '../boxHeader/BoxHeader';

const useStyles = makeStyles(theme => ({
  chip: {
    width: '100%',
    borderRadius: 0,
  },
  ButtonBuy: {
    color: theme.palette.text.secondary,
    backgroundColor: colors.red[500]
  },
  ButtonSell: {
    color: theme.palette.text.secondary,
    backgroundColor: colors.green[500]
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Grid container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <Grid container item >
        <Grid item xs={12}>
          <Box>
            <Grid container >
              <Grid item xs={12} >
                <Paper>
                  <BoxHeader display="flex" alignItems="center">
                    <Box pr={2} >
                      <Typography color="textSecondary">
                        <SwapHoriz />
                      </Typography>
                    </Box>
                    <Typography variant="body2" component="span" color="textSecondary">
                      BTC-USD
                  </Typography>
                  </BoxHeader>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={1} bgcolor={theme.palette.background.paper}>
            <Grid container spacing={1} >
              <Grid container item xs={12} alignItems="center">
                <Grid item xs={5} >
                  <Button variant="contained" className={classes.ButtonBuy} >
                    <Box p={1} >
                      <TrendingUp fontSize="large" />
                    </Box>
                  9562.47 Sell
                </Button>
                </Grid>
                <Grid item xs={2} >
                  <Typography align="center" color="textSecondary" >
                    18.5
                  </Typography>
                </Grid>
                <Grid item xs={5} >
                  <Button variant="contained" className={classes.ButtonSell} >
                    <Box p={1} >
                      <TrendingDown fontSize="large" />
                    </Box>
                 9580.52 Buys
                </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={1} bgcolor={theme.palette.background.paper}>
            <Grid container >
              <Grid container item xs={12} >
                <Grid item xs={4} >
                  <Box p={0.25}>
                    <Chip color="primary" variant="outlined"
                      label='1.25'
                      className={classes.chip}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4} >
                  <Box p={0.25}>
                    <Chip color="primary" variant="outlined"
                      label='MKT'
                      className={classes.chip}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4} >
                  <Box p={0.25}>
                    <Chip color="primary" variant="outlined"
                      label='Slippage'
                      className={classes.chip}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid >
  );
}