import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { thunkFocusFilms } from '../../redux/action/action'
import { useHistory } from "react-router-dom";
import styles from './LikeMovies.module.css'

function LikeMovies({ obj }) {
  const [headerLink, setHeaderLink] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
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
    <Box style={{ padding: '20px 20px 20px 0' }
    } onClick={() => clickHandler()}>
      <img className={styles.myImg} style={{
        height: '361px', width: '263px', display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5%',
      }}
        src={obj?.posterUrl} alt="123" />
    </Box>
  )
}

export default LikeMovies

