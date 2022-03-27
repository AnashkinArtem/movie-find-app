import React, { SetStateAction, useState } from "react";
import { Movie } from "src/utils/interfaces/interfaces";
import MoviesList from './components/Movies/MovieList/MovieList';
import styles from './styles.module.scss';

interface IProps {
    movies: Movie[];
}

const Main: React.FC<IProps> = ({ movies }): JSX.Element => {
        return(
            <main>
                <div className={styles.main__wrapper}>
                    <MoviesList movies={movies} />
                </div>
            </main>
        )
};

export default Main;