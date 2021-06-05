import { Box, Button, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Iframe from 'react-iframe'
import { thunkSearchGengerFilms } from '../../redux/action/action'


function FocusFilm() {
  const focusFilm = useSelector(stat => stat.focusedFilm)
  const topGenresFilms = useSelector(stat => stat.genresFilms)
  console.log('topGenresFilms', topGenresFilms)
  const [flag, setFlag] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    if (Object.values(focusFilm).length) {
      const genger = focusFilm?.genres
      dispatch(thunkSearchGengerFilms(genger[0]))
    }
  }, [focusFilm, dispatch])


  return (
    <Grid container style={{ backgroundColor: 'white' }}>
      <Box style={{ background: `url(${focusFilm?.title?.image?.url})`, height: '100vh', width: '100%', textShadow: 'black 0 0 6px' }}>
        <Grid item xs={12} >
          <Box width="1000px">
            <Typography variant='h2' style={{ fontWeight: '900', padding: '250px 0 0px 50px' }}>
              {focusFilm?.title?.title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant='h3' style={{ fontWeight: '900', padding: '50px 0 50px 50px', }}>
              imdb {focusFilm?.ratings?.rating} | {focusFilm?.title?.titleType} | {focusFilm?.title?.year}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box padding=' 0 0 50px 50px'>
            <Button onClick={() => setFlag(!flag)} style={{
              height: '50px',
              width: '150px', border: '3px solid white', backgroundColor: 'black', color: 'white', opacity: '0.5', borderRadius: '20%', marginTop: '100px'
            }}>Watch</Button>
          </Box>
          {flag ?
            <Box>
              <Iframe width="560" height="315" url="https://www.youtube.com/embed/MNmLn6a-jqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></Iframe>
            </Box>
            : ''
          }
        </Grid>
      </Box>
      <Grid item xs={12} style={{ backgroundColor: 'black' }}>
        <Box style={{ width: '800px', margin: '50px 0 50px 50px' }} >
          <Typography style={{ fontSize: '30px' }}>
            Watch {focusFilm?.title?.title} on Richbee Shows
          </Typography>
        </Box>
        <Box style={{ width: '800px', margin: '50px 0 50px 50px' }}>
          <Typography>
            {focusFilm?.plotSummary?.text}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: 'black' }}>
        <Typography>
          You may also like
        </Typography>
        <Box display='flex'>
        </Box>
      </Grid>
    </Grid >
  )
}

export default FocusFilm
