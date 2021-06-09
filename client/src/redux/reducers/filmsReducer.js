import { CLEAR_STATE, SEARCH_FILM } from '../types/types'

const filmsReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_FILM:
      return action.payload
    case CLEAR_STATE:
      return action
    default:
      return state
  }
}

export default filmsReducer
