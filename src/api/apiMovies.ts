import axios from 'axios';

const API_URL_MOVIES = 'http://www.omdbapi.com/';

const getMovies = (): Promise<any> => {
    return axios.get(`${API_URL_MOVIES}?s=spider&apikey=ad4eb2c2`);
}


const getMovieBySearchParam = (param: string) => {
    return axios.get(`${API_URL_MOVIES}?s=${param}&apikey=ad4eb2c2`)
}

export { getMovies, getMovieBySearchParam };