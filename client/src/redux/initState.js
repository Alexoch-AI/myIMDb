const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

const initState = () => {
  const state = {
    films: [],
    focusedFilm: {},
    likesFilms: [],
    urlTrailer: '',
    loader: false,
  }
  return persistedState || state
}

export default initState
