/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { thunkAllFilms } from '../../redux/action/action'
import useStyles from './useStyles'

function CompSearch() {
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()
  const classes = useStyles()

  const inputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilm = async (e) => {
    e.preventDefault()
    if (searchInput !== 0) {
      dispatch(thunkAllFilms(searchInput))
    }
    setSearchInput('')
  }

  return (
    <Box className={classes.rootBox}>
      <form onSubmit={searchFilm} className={classes.rootForm}>
        <input
          className={classes.rootSearch}
          onChange={inputHandler}
          placeholder="Type here smth..."
          value={searchInput}
        />
        <Button className={classes.root} type="submit">{'Search'}</Button>
      </form>
    </Box>
  )
}

export default CompSearch
