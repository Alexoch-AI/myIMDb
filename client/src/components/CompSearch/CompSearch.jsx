import React, { useState } from 'react'
import { Box, Button, Input } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { thunkAllFilms } from '../../redux/action/action'
import './search.css'
function CompSearch() {
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilm = async () => {
    if (searchInput !== 0) {
      dispatch(thunkAllFilms(searchInput))
      setSearchInput('')
    }
  }

  return (
    <Box paddingTop="40px" paddingBottom="40px">
      <Box>
        <Input
          className="subscribe"
          style={{
            backgroundColor: 'white',
            borderRadius: '20px 0 0 20px',
            fontSize: '30px',
          }}
          onChange={inputHandler} placeholder='Type here smth...' />
        <Button style={{ backgroundColor: 'white', borderRadius: ' 0 20px 20px 0', position: 'relative', top: '-8px', lineHeight: '1.60' }} onClick={searchFilm}>Search</Button>
      </Box>
    </Box>
  )
}

export default CompSearch
