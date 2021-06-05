import { SEARCH_GENGER_FILM } from "../types/types"

const genresFilmsReducer = (state = {}, action) => {
  switch (action.type) {

    case SEARCH_GENGER_FILM:
      return action.payload

    default:
      return state
  }
}

export default genresFilmsReducer
