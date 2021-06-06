const initState = () => {
  const state = {
    films: [],
    focusedFilm: {},
    likesFilms: [],
    urlTrailer: '',
    loader: false,
  }
  return state
}

export default initState
