import { Grid, Paper } from '@material-ui/core';
import React from 'react'
import StockMarket from '../chart/StockMarket';

export default () => {
  return (
    <Grid container item xs={12} spacing={1}>
      <Grid item lg={6} md={12}>
        <Paper elevation={3} >
          <StockMarket />
        </Paper>
      </Grid>
      <Grid item lg={6} md={12}>
        <Paper elevation={3} >
          <StockMarket />
        </Paper>
      </Grid>
      <Grid item lg={6} md={12}>
        <Paper elevation={3} >
          <StockMarket />
        </Paper>
      </Grid>
      <Grid item lg={6} md={12}>
        <Paper elevation={3} >
          <StockMarket />
        </Paper>
      </Grid>
    </Grid>
  );
}
