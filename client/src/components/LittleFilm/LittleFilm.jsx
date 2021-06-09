/* eslint-disable react/prop-types */
import {
  Card, CardContent, CardMedia, Typography,
} from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { thunkFocusFilms } from '../../redux/action/action'
import useStyles from './useStyles'

function LittleFilm({ obj }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(thunkFocusFilms(obj.filmId))
  }

  return (
    <Link style={{ textDecoration: 'none' }} to={`/film/${obj.filmId}`}>
      <Card onClick={() => clickHandler()} className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={obj?.posterUrlPreview}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              title={obj.nameRu || obj.nameEn}
              variant="h5"
              className={classes.hiddenText}
            >
              {obj.nameRu || obj.nameEn}
              <Typography>
                {obj.year}
                {' '}
                |
                {' '}
                {Object.values(obj).length ? obj?.countries[0]?.country : null}
                {' '}
                |
                {' '}
                {Object.values(obj).length ? obj?.genres[0]?.genre : null}
                <br />
                {
                  obj?.rating
                    ? (
                      <Typography
                        component="span"
                        className={classes.ratingSpan}
                      >
                        {obj?.rating}
                      </Typography>
                    )
                    : null
                }
              </Typography>
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}

export default LittleFilm
