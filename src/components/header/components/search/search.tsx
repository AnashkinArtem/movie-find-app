import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieBySearchParam } from 'src/api/apiMovies';
import { addMovies } from 'src/redux/actions/actions';
import styles from './styles.module.scss'

const Search: React.FC = () => {

    const [valueSearch, setValueSearch] = useState('');
    const dispatch = useDispatch();
    const err = ['']

    const handleClick = () => {
        if(!valueSearch) return;
        getMovieBySearchParam(valueSearch)
            .then((response) => dispatch(addMovies(response.data.Search)))
            .catch(() => dispatch(addMovies(err)))
            setValueSearch('')      
    }

    const handleSubmit = (event: any) => {
        if(!valueSearch) return;
        if(event.key === 'Enter'){
            getMovieBySearchParam(valueSearch)
            .then((response) => dispatch(addMovies(response.data.Search)))  
            .catch(() => dispatch(addMovies(err)))       
            setValueSearch('')           
        }  
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(event.target.value);
    }   


    return(
        <div className={styles.search__wrapper}>
        <input 
            value={valueSearch}
            onKeyPress={handleSubmit}
            type='text' 
            placeholder='What do you want to watch?'
            className={styles.header__input__search}
            onChange={handleChange}
        />
        <button 
            onClick={handleClick}
            className={styles.header__btn__search}            
        >Search</button>
        </div>
    )
}


export default Search;

function then(arg0: any, setMovies: any) {
    throw new Error('Function not implemented.');
}
function setValueSearch(value: string) {
    throw new Error('Function not implemented.');
}

function valueSearch(valueSearch: any) {
    throw new Error('Function not implemented.');
}

