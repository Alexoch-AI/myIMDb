import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thunkAllFilms } from '../../redux/action/action';
import useStyles from './useStyles.js'

export default function HeaderFilm() {
  const [searchInput, setSearchInput] = useState('')
  const history = useHistory()

  const classes = useStyles();
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilm = async (e) => {
    e.preventDefault()
    if (searchInput !== 0) {
      dispatch(thunkAllFilms(searchInput))
      setSearchInput('')
      history.push('/')
    }
  }

  return (
    <div className={classes.root} id='Header'>
      <AppBar position="static" className={classes.myBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/' >
              MiniКинопоиск
          </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>
            <form onSubmit={searchFilm}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={inputHandler}
                value={searchInput}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div >
  );
}
