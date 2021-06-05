import { combineReducers } from 'redux'
import filmsReducer from './filmsReducer'
import focusedFilmReducer from './focusedFilmReducer'
import genresFilmsReducer from './genresFilmsReducer'

const rootReducer = combineReducers({
  films: filmsReducer,
  focusedFilm: focusedFilmReducer,
  genresFilms: genresFilmsReducer,
})

export default rootReducer
