import React from 'react';
import { Grid } from '@material-ui/core';

import Main from './components/layout/Main';
import Aside from './components/layout/Aside';
import Footer from './components/layout/Footer';

export default () => {
  return (

    <Grid container
      spacing={2}
      justify="center"
    >
      <Grid container item xs={8} spacing={2}>
        <Main />
      </Grid>
      <Grid container item
        xs={4}
        spacing={2}
        alignItems='flex-start'>
        <Aside />
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Footer />
      </Grid>
    </Grid>
  );
}

