import {
  Box, Button, Grid, Typography,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Iframe from 'react-iframe'
import { thunkGetTreiler, thunkSearchLikedFilms } from '../../redux/action/action'
import LikeMovies from '../LikeMovies/LikeMovies'
import PureLoader from '../PureLoader/PureLoader'
import Footer from '../Footer/Footer'
import useStyles from './useStyles'

function FocusFilm() {
  const focusFilm = useSelector((state) => state.focusedFilm)
  const urlTrailer = useSelector((state) => state.urlTrailer)
  const likesFilms = useSelector((state) => state.likesFilms)
  const loader = useSelector((state) => state.loader)
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles()
  const currentUrlTrailer = urlTrailer?.replace(/(watch\?v=)/g, 'embed/').replace(/(v\/)/g, 'embed/')

  useEffect(() => {
    if (Object.values(focusFilm).length) {
      const currentId = focusFilm?.filmId
      dispatch(thunkGetTreiler(String(currentId)))
      dispatch(thunkSearchLikedFilms(String(currentId)))
    }
  }, [dispatch, focusFilm])

  return (
    <>
      {
        loader.loader
          ? (
            <Box className={classes.boxN1}>
              <PureLoader />
            </Box>
          )
          : (
            <>
              <Grid container style={{ color: 'white' }}>
                <Box className={classes.boxN2}>
                  <Grid item xs={12}>
                    <Box display="flex">
                      <Box width="1000px">
                        <Typography variant="h2" className={classes.typo1}>
                          {focusFilm?.nameRu || focusFilm?.nameEn}
                        </Typography>
                        <Typography variant="h4" className={classes.typo2}>
                          {focusFilm?.year}
                          {' '}
                          |
                          {' '}
                          {Object.values(focusFilm).length
                            ? focusFilm?.countries[0]?.country : null}
                          {' '}
                          |
                          {' '}
                          {Object.values(focusFilm).length ? focusFilm?.genres[0]?.genre : null}
                        </Typography>
                        {
                          currentUrlTrailer ? (
                            <Box padding=" 0 0 20px 130px">
                              <Button
                                onClick={() => setFlag(!flag)}
                                className={classes.button1}
                              >
                                Watch
                              </Button>
                            </Box>
                          )
                            : ''
                        }
                        {flag
                          ? (
                            <Box style={{ paddingLeft: '130px' }}>
                              <Iframe
                                width="560"
                                height="315"
                                url={currentUrlTrailer}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              />
                            </Box>
                          )
                          : ''}
                      </Box>
                      <Box style={{ width: '1000px', paddingTop: '150px' }}>
                        <img
                          className={classes.img1}
                          src={focusFilm?.posterUrl}
                          alt="mainImg"
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Box>
                <Grid item xs={12} className={classes.grid1}>
                  <Box className={classes.boxN3}>
                    <Typography variant="h4" className={classes.typo4}>
                      Смотри
                      {' '}
                      {focusFilm?.nameRu || focusFilm?.nameEn}
                      {' '}
                      на MiniКинопоиске
                    </Typography>
                  </Box>
                  <Box className={classes.boxN4}>
                    <Typography style={{ fontWeight: '500', fontSize: '22px' }}>
                      {focusFilm?.description || 'Нет описания :С'}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} className={classes.grid1}>
                  <Typography variant="h5" className={classes.typo5}>
                    Тебе может понравиться
                  </Typography>
                  <Box display="flex" style={{ paddingLeft: '130px' }}>
                    {
                      likesFilms.length ? likesFilms.map((el) => (
                        <LikeMovies
                          key={el.filmId}
                          obj={el}
                        />
                      ))
                        : ''
                    }
                  </Box>
                </Grid>
              </Grid>
              <Footer />
            </>
          )
      }
    </>
  )
}

export default FocusFilm