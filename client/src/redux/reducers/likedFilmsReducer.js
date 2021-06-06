import { SEARCH_LIKED_FILM } from "../types/types"

const likedFilmsReducer = (state = {}, action) => {
  switch (action.type) {

    case SEARCH_LIKED_FILM:
      return action.payload

    default:
      return state
  }
}

export default likedFilmsReducer
