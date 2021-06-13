/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { Box } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import LittleFilm from '../LittleFilm/LittleFilm'
import PureLoader from '../PureLoader/PureLoader'
import useStyles from './useStyles'

function ListFilms() {
  const classes = useStyles()

  const films = useSelector((state) => state.films)
  const loader = useSelector((state) => state.loader)
  return (
    <Box className={classes.root}>
      {
        loader.loader
          ? <PureLoader />
          : films.length
            ? films.map((el) => (
              <LittleFilm
                key={el.filmId}
                obj={el}
              />
            ))
            : null
      }
    </Box>
  )
}

export default ListFilms
