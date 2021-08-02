import * as ActionTypes from './ActionTypes'

const initializeMovie: movieState = {
    isLoading: true,
    errMess: null,
    movies: []
}

export const movieReducer = (state: movieState = initializeMovie, action: ActionMovie) => {
    switch(action.type){
        case ActionTypes.MOVIES_LOADING:
            return {
                ...state,
                errMess: null,
                isLoading: true,
                movies: []
            }
        case ActionTypes.MOVIES_FAILED:
            return {
                ...state,
                errMess: action.payload,
                isLoading: false,
                movies: []
            }
        case ActionTypes.FETCH_MOVIES:
            return {
                ...state,
                isLoading: false,
                movies: action.payload
            }
        default:
            return state
    }
}