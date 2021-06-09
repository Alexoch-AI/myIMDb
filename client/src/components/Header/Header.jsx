import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import { clearReduxState, thunkAllFilms } from '../../redux/action/action'
import useStyles from './useStyles'

export default function HeaderFilm() {
  const [searchInput, setSearchInput] = useState('')
  const history = useHistory()

  const classes = useStyles()
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

  const clearLocalStorage = () => {
    localStorage.removeItem('reduxState')
    dispatch(clearReduxState({}))
  }

  return (
    <div className={classes.root} id="Header">
      <AppBar position="static" className={classes.myBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/" onClick={() => clearLocalStorage()}>
              MiniКинопоиск
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
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
    </div>
  )
}
