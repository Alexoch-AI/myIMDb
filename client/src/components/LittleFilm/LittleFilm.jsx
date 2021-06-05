import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { thunkFocusFilms } from '../../redux/action/action';
import useStyles from './useStyles';
import { Link } from 'react-router-dom'

function LittleFilm({ obj }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currentId = obj.id.replace('/title/', '')

  const clickHandler = () => {
    dispatch(thunkFocusFilms(currentId))
  }

  return (
    <Link style={{ textDecoration: 'none' }} to={`/film/${currentId}`} >
      <Card onClick={() => clickHandler()} className={classes.root} style={{ width: '500px', cursor: 'pointer' }}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography title={obj.title} component="h5" variant="h5" style={{ textOverflow: 'ellipsis', width: '320px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              {obj.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {obj.titleType}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Typography>
              {obj.year}
            </Typography>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={obj?.image?.url}
        />
      </Card>
    </Link>
  )
}

export default LittleFilm

