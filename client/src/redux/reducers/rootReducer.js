import { combineReducers } from 'redux'
import filmsReducer from './filmsReducer'
import focusedFilmReducer from './focusedFilmReducer'
import likedFilmsReducer from './likedFilmsReducer'
import loaderReducer from './loaderReducer'
import urlTrailerReducer from './urlTrailerReducer'

const rootReducer = combineReducers({
  films: filmsReducer,
  focusedFilm: focusedFilmReducer,
  likesFilms: likedFilmsReducer,
  urlTrailer: urlTrailerReducer,
  loader: loaderReducer,
})

export default rootReducer
