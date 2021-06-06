import { TAKE_FILM } from '../types/types'

const focusedFilmReducer = (state = {}, action) => {
  switch (action.type) {
    case TAKE_FILM:
      return action.payload

    default:
      return state
  }
}

export default focusedFilmReducer
