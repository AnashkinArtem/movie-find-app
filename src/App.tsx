import React, { useEffect } from 'react';
import { Header, Main, Footer, ScrollToTop } from './components';
import { getMovies, testApi } from './api/apiMovies';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import {searchMovie} from './redux/actions/actions';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';


const App = () => {   

    const mainMovies = useSelector((state: any) => state.data.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!mainMovies.length){
            getMovies().then(data => dispatch(searchMovie(data.data.Search)))  
                       .catch(data => dispatch(searchMovie(data.data.Error)))                       
        }          
    }, [dispatch, mainMovies.length]);
    getMovies().then(data => console.log(data.data))
    testApi().then(data => console.log(data.data))

    return (
        <>
            <Header/>
            <Main movies={mainMovies} />
            <Footer/> 
            <ScrollToTop/>             
            <CookieConsent
                debug={false}    
            >
                This site uses cookies. See our <Link to="/privacypolicy" style={{ textDecoration: 'none', color: 'red' }}>privacy policy</Link> for more.
            </CookieConsent>              
        </>
    )
}

export default App;

function logErrorToMyService(error: any, errorInfo: any) {
    throw new Error('Function not implemented.');
}
