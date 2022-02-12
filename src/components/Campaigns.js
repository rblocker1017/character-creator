import React from 'react'
import Grid from '@mui/material/Grid';
import Campaign from './Campaign'

const Campaigns = () => {
  return (
    <div className = "campaigns">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          
        </Grid>

        <Grid item xs={3.5}>
          <Campaign></Campaign>
        </Grid>

        <Grid item xs={1}>
          
          </Grid>

        <Grid item xs={3.5}>
          {/*<Campaign></Campaign>*/}
        </Grid>

        <Grid item xs={2}>
          
          </Grid>
      </Grid>
    </div>
  )
}

export default Campaigns