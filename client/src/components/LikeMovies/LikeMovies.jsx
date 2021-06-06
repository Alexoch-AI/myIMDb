/* eslint-disable react/prop-types */
import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { thunkFocusFilms } from '../../redux/action/action'
import useStyles from './useStyles'

function LikeMovies({ obj }) {
  const [headerLink, setHeaderLink] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const clickHandler = () => {
    dispatch(thunkFocusFilms(String(obj.filmId)))
    history.push(`/film/${String(obj.filmId)}`)
    headerLink?.scrollIntoView()
  }

  useEffect(() => {
    const myLink = document.querySelector('#Header')
    setHeaderLink(myLink)
  }, [])
  return (
    <Box
      style={{ padding: '20px 20px 20px 0' }}
      onClick={() => clickHandler()}
    >
      <img
        className={classes.img1}
        src={obj?.posterUrl}
        alt="imgAlt"
      />
    </Box>
  )
}

export default LikeMovies
