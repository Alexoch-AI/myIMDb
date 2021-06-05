import { SEARCH_FILM, SEARCH_GENGER_FILM, TAKE_FILM } from "../types/types"



export const thunkAllFilms = (searchInput) => async (dispatch, getState) => {
  const response = await fetch(`https://imdb8.p.rapidapi.com/title/find?q=${searchInput}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
  })
  const serverResponse = await response.json()
  const currentSearch = serverResponse.results.filter(el => el.titleType === "movie" || el.titleType === "tvSeries")
  dispatch(getAllFilms(currentSearch))
}

export const getAllFilms = (films) => {
  return {
    type: SEARCH_FILM,
    payload: films,
  }
}


export const thunkFocusFilms = (id) => async (dispatch, getState) => {
  const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
  })
  const serverResponse = await response.json()
  console.log('serverResponse', serverResponse)
  dispatch(getFocusFilms(serverResponse))
}

export const getFocusFilms = (film) => {
  return {
    type: TAKE_FILM,
    payload: film,
  }
}

export const thunkSearchGengerFilms = (genger) => async (dispatch, getState) => {
  const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2F${genger}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
  })
  const serverResponse = await response.json()
  const myCurrentArrayGenres = []
  serverResponse.slice(0, 4).forEach(el => {
    el.replace('/title/', '')
    fetch(`https://imdb8.p.rapidapi.com/title/find?q=${el}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
      }
    })
      .then(response => {
        myCurrentArrayGenres.push(response)
      })
      .catch(err => {
        console.error(err);
      });
  })
  console.log('myCurrentArrayGenres', myCurrentArrayGenres)
  // dispatch(getGenresFilms(serverResponse.slice(0, 4)))
}

export const getGenresFilms = (films) => {
  return {
    type: SEARCH_GENGER_FILM,
    payload: films,
  }
}
