export const SEARCH_MOVIE = 'SEARCH_MOVIE'
export const SET_MOVIES = 'SET_MOVIES'

const searchMovie = (payload: any) => {
    return {
        type: SEARCH_MOVIE,
        payload: payload
    }
}

const addMovies = (payload: any) => {
    return {
        type: SET_MOVIES,
        payload: payload
    }
}

export {searchMovie, addMovies};
