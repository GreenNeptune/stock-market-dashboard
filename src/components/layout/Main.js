import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import TradeCard from '../card/TradeCard'
import FilterTable from '../Table/FilterTable'
import ThresholdTable from '../Table/ThresholdTable'
import FILTER_TABLE_DATA from '../../DB/filterTableData'

export default () => {
  return (
    <React.Fragment>
      <Grid item md={12} lg={6}>
        <Paper elevation={3}>
          <FilterTable rows={FILTER_TABLE_DATA.rows} headCells={FILTER_TABLE_DATA.headCells} />
        </Paper>
      </Grid>
      <Grid item md={12} lg={6}>
        <Paper elevation={3}>
          <FilterTable rows={FILTER_TABLE_DATA.rows} headCells={FILTER_TABLE_DATA.headCells} />
        </Paper>
      </Grid>
      <Grid item md={12} lg={8}>
        <Paper elevation={3}>
          <ThresholdTable />
        </Paper>
      </Grid>
      <Grid item md={8} lg={4}>
        <TradeCard />
        <TradeCard />
      </Grid>
    </React.Fragment >
  )
}
