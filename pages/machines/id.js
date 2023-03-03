import { Grid } from '@mui/material'
import React from 'react'
import BarOverview from '../../src/components/dashboard/BarOverview'
import ProductPerfomance from '../../src/components/dashboard/ProductPerfomance'
import SalesOverview from '../../src/components/dashboard/SalesOverview'

function id() {
  return (
    <Grid container spacing={0}>
    <Grid item xs={12} lg={12}>
      <BarOverview />
    </Grid>
    {/* ------------------------- row 1 ------------------------- */}
    {/* <Grid item xs={12} lg={4}>
      <DailyActivity />
    </Grid> */}
    <Grid item xs={12} lg={12}>
      <ProductPerfomance />
    </Grid>
  </Grid>
  )
}

export default id