import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import LittleFilm from '../LittleFilm/LittleFilm'
import PureLoader from '../PureLoader/PureLoader'

function ListFilms() {
  const films = useSelector(state => state.films)
  const loader = useSelector(state => state.loader)
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          {
            loader.loader ? <PureLoader /> :
              films.length ? films.map(el => <LittleFilm key={el.filmId} obj={el} />) : null
          }
        </Box>
      </Grid>
    </Grid>
  )
}

export default ListFilms

