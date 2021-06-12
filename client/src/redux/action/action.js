/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import {
  CLEAR_STATE,
  GET_TRAILER, LOADER_FALSE, LOADER_TRUE, SEARCH_FILM, SEARCH_LIKED_FILM, TAKE_FILM,
} from '../types/types'

export const thunkAllFilms = (searchInput) => async (dispatch, getState) => {
  dispatch(actionLoaderTrue())
  const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchInput}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  })
  const serverResponse = await response.json()
  dispatch(getAllFilms(serverResponse?.films?.slice(0, 7)))
  dispatch(actionLoaderFalse())
}

export const getAllFilms = (films) => ({
  type: SEARCH_FILM,
  payload: films,
})

export const thunkFocusFilms = (id) => async (dispatch, getState) => {
  dispatch(actionLoaderTrue())
  const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  })
  const serverResponse = await response.json()
  dispatch(getFocusFilms(serverResponse.data))
  dispatch(actionLoaderFalse())
}

export const getFocusFilms = (film) => ({
  type: TAKE_FILM,
  payload: film,
})

export const thunkGetTreiler = (id) => async (dispatch, getState) => {
  const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/videos`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  })
  const serverResponse = await response.json()
  const currentYouTube = []
  if (serverResponse?.trailers.length) {
    serverResponse?.trailers.forEach((el) => {
      if (el.site.toLowerCase() === 'youtube') {
        currentYouTube.push(el)
      }
      currentYouTube.push({ url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })
    })
  } else {
    currentYouTube.push({ url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })
  }
  if (currentYouTube) {
    dispatch(getTrailer(currentYouTube[0]?.url.replace(/(watch\?v=)/g, 'embed/').replace(/(v\/)/g, 'embed/')))
  }
}

export const getTrailer = (url) => ({
  type: GET_TRAILER,
  payload: url,
})

export const thunkSearchLikedFilms = (id) => async (dispatch, getState) => {
  dispatch(actionLoaderTrue())
  const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  })
  const serverResponse = await response.json()
  dispatch(getLikedFilms(serverResponse.items.slice(0, 4)))
  dispatch(actionLoaderFalse())
}

export const getLikedFilms = (films) => ({
  type: SEARCH_LIKED_FILM,
  payload: films,
})

export const actionLoaderFalse = () => ({
  type: LOADER_FALSE,
})

export const actionLoaderTrue = () => ({
  type: LOADER_TRUE,
})

export const clearReduxState = (enptyState) => ({
  type: CLEAR_STATE,
  payload: enptyState,
})
