import { GET_TRAILER } from "../types/types"

const urlTrailerReducer = (state = '', action) => {
  switch (action.type) {

    case GET_TRAILER:
      return action.payload

    default:
      return state
  }
}

export default urlTrailerReducer
