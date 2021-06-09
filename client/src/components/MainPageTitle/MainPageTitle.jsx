import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './useStyles'

function Header() {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12}>
        <Box className={classes.rootBox}>
          <Typography align="center" className={classes.root}>
            Unlimited movies,
          </Typography>
          <Typography align="center" className={classes.root}>
            TV shows, and more.
          </Typography>
        </Box>
        <Box>
          <Typography align="center" className={classes.smallroot}>
            Watch anywhere. Cancel anytime.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header
