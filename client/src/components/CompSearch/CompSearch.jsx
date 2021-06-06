import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { thunkAllFilms } from '../../redux/action/action'
import './search.css'
import useStyles from './useStyles.js'


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
    <Box paddingTop="40px" paddingBottom="40px">
      <Box>
        <form onSubmit={searchFilm}>
          <input
            className='mostInput'
            onChange={inputHandler} placeholder='Type here smth...'
            value={searchInput}
          />
          <Button className={classes.root} onClick={searchFilm} style={{ backgroundColor: 'aqua' }}>Search</Button>
        </form>
      </Box>
    </Box>
  )
}

export default CompSearch
