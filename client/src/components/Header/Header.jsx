import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import './header.css'

function Header() {
  return (
    <Grid container
      direction="column"
      alignItems="center"
      justify="center">
      <Grid item xs={12}>
        <Box paddingTop='20vh' paddingBottom="20px">
          <Typography variant="h1" align="center" style={{ fontWeight: '900' }} >
            Unlimited movies,
        </Typography>
          <Typography variant="h1" align="center" style={{ fontWeight: '900' }}>
            TV shows, and more.
        </Typography>
        </Box>
        <Box>
          <Typography variant="h3" align="center">
            Watch anywhere. Cancel anytime.
        </Typography>
        </Box>
      </Grid>
    </Grid >
  )
}

export default Header
