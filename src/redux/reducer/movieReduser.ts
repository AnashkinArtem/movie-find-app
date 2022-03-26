import {SEARCH_MOVIE, SET_MOVIES} from '../actions/actions'

const initialState = {
    movie: []
}

const movieReducer = (state = initialState, action: any) => {
    switch(action.type){
        case SEARCH_MOVIE:
            return {...state, movie: action.payload};
        case SET_MOVIES:
            return {...state, movie: action.payload};       
        default:
            return state;    
    }
}

export default movieReducer;