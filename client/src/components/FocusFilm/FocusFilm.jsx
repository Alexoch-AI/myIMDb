import {
  Box, Button, Grid, Typography,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Iframe from 'react-iframe'
import { thunkGetTreiler, thunkSearchLikedFilms } from '../../redux/action/action'
import LikeMovies from '../LikeMovies/LikeMovies'
import PureLoader from '../PureLoader/PureLoader'

function FocusFilm() {
  const focusFilm = useSelector((state) => state.focusedFilm)
  const urlTrailer = useSelector((state) => state.urlTrailer)
  const likesFilms = useSelector((state) => state.likesFilms)
  const loader = useSelector((state) => state.loader)
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()
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
            <Box display="flex" flexDirection="column" alignItems="center" paddingTop="100px">
              <PureLoader />
            </Box>
          )
          : (
            <Grid container style={{ color: 'white' }}>
              <Box style={{
                backgroundColor: 'black', height: '100vh', width: '100%', textShadow: 'black 0 0 6px',
              }}
              >
                <Grid item xs={12}>
                  <Box display="flex">
                    <Box width="1000px">
                      <Typography variant="h2" style={{ fontWeight: '900', padding: '130px 0 0px 130px', color: 'white' }}>
                        {focusFilm?.nameRu || focusFilm?.nameEn}
                      </Typography>
                      <Typography variant="h4" style={{ fontWeight: '400', paddingLeft: '130px' }}>
                        {focusFilm?.year}
                        {' '}
                        |
                        {' '}
                        {Object.values(focusFilm).length ? focusFilm?.countries[0]?.country : null}
                        {' '}
                        |
                        {' '}
                        {Object.values(focusFilm).length ? focusFilm?.genres[0]?.genre : null}
                        {
                          focusFilm?.rating ? (
                            <Typography style={{
                              backgroundColor: '#FAC539', color: 'black', borderRadius: '8px', marginTop: '5px', width: '85px',
                            }}
                            >
                              Rating
                              {focusFilm?.rating}
                            </Typography>
                          ) : null
                        }
                      </Typography>
                      {
                        currentUrlTrailer ? (
                          <Box padding=" 0 0 20px 130px">
                            <Button
                              onClick={() => setFlag(!flag)}
                              style={{
                                height: '50px',
                                width: '150px',
                                border: '3px solid white',
                                backgroundColor: 'black',
                                color: 'white',
                                borderRadius: '20%',
                                marginTop: '20px',
                              }}
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
                        style={{
                          height: '500px',
                          width: '350px',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        src={focusFilm?.posterUrl}
                        alt="123"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Box>
              <Grid item xs={12} style={{ backgroundColor: 'white', color: 'black' }}>
                <Box style={{ width: '800px', margin: '50px 0 20px 130px' }}>
                  <Typography style={{ fontSize: '36px', fontWeight: '900', lineHeight: '52px' }}>
                    Watch
                    {' '}
                    {focusFilm?.nameRu || focusFilm?.nameEn}
                    {' '}
                    on Richbee Shows
                  </Typography>
                </Box>
                <Box style={{ width: '800px', paddingBottom: '50px', paddingLeft: '130px' }}>
                  <Typography style={{ fontWeight: '400' }}>
                    {focusFilm?.description || 'Нет описания :С'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} style={{ backgroundColor: 'white', color: 'black' }}>
                <Typography variant="h5" style={{ fontWeight: '800', paddingLeft: '130px' }}>
                  You may also like
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
          )
      }

    </>
  )
}

export default FocusFilm
