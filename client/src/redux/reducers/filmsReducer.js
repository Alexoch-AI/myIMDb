import { SEARCH_FILM } from "../types/types"

const filmsReducer = (state = [], action) => {
  switch (action.type) {

    case SEARCH_FILM:
      return action.payload

    default:
      return state
  }
}

export default filmsReducer
