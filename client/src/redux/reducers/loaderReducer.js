import { LOADER_FALSE, LOADER_TRUE } from "../types/types"

const loaderReducer = (state = {}, action) => {
  switch (action.type) {

    case LOADER_TRUE:
      return {
        ...state,
        loader: true,
      }
    case LOADER_FALSE:
      return { ...state, loader: false }

    default:
      return state
  }
}

export default loaderReducer
