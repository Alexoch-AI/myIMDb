import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { thunkFocusFilms } from '../../redux/action/action';
import useStyles from './useStyles';
import { Link } from 'react-router-dom'

function LittleFilm({ obj }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(thunkFocusFilms(obj.filmId))
  }

  return (
    <Link style={{ textDecoration: 'none' }} to={`/film/${obj.filmId}`} >
      <Card onClick={() => clickHandler()} className={classes.root} style={{ width: '450px', cursor: 'pointer' }}>
        <CardMedia
          className={classes.cover}
          image={obj?.posterUrlPreview}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography title={obj.nameRu || obj.nameEn} component="h5" variant="h5" style={{ textOverflow: 'ellipsis', width: '320px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              {obj.nameRu || obj.nameEn}
              <Typography>
                {obj.year} | {Object.values(obj).length ? obj?.countries[0]?.country : null} | {Object.values(obj).length ? obj?.genres[0]?.genre : null} <br />
                <Typography component={'span'} style={{ backgroundColor: '#FAC539', color: 'black', borderRadius: '8px', marginTop: '5px', width: '85px', padding: '0 5px 0 5px' }}> {obj?.rating || null}</Typography>
              </Typography>
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}

export default LittleFilm

