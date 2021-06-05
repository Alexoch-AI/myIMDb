import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import LittleFilm from '../LittleFilm/LittleFilm'

function ListFilms() {
  const films = useSelector(state => state.films)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          {
            films ? films.map(el => <LittleFilm key={el.id} obj={el} />) : ''
          }
        </Box>
      </Grid>
    </Grid>
  )
}

export default ListFilms

