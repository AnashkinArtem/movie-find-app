import React from "react";
import { Movie } from 'src/utils/interfaces/interfaces';
import MovieItem from '../MovieItem/MovieItem';

interface IProps {
    movies: Movie[];
}

const MovieList: React.FC<IProps> = ({ movies }): JSX.Element => {

    return(
        <>
           {
             movies.length ?
             movies.map((movie) => {
                 return (                   
                     <MovieItem
                        key={movie.Title+movie.imdbID}
                        Title={movie.Title}
                        Year={movie.Year}
                        Poster={movie.Poster}
                        imdbID={movie.imdbID}
                        Type={movie.Type}
                     />
                 )
             })
             : <div>No Movies</div>
          }
        </>
    )
}

export default MovieList;