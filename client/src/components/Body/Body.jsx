import React from 'react'
import { Grid } from '@material-ui/core'
import CompSearch from '../CompSearch/CompSearch'
import ListFilms from '../ListFilms/ListFilms'
import '../../main.css'
function Body() {

  return (
    <Grid container
      direction="column"
      alignItems="center"
      justify="center">
      <div className='background' />
      <Grid item xs={12}>
        <CompSearch />
      </Grid>
      <Grid item xs={12}>
        <ListFilms />
      </Grid>
    </Grid >
  )
}

export default Body

