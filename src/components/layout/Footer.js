import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import LogTable from '../Table/LogTable';

export default () => {
  return (
    <React.Fragment>
      <Grid item md={12} lg={6}  >
        <Paper elevation={3}>
          <LogTable />
        </Paper>
      </Grid>
      <Grid item md={12} lg={6}>
        <Paper elevation={3}>
          <LogTable />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
