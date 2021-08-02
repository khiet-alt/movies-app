import * as ActionTypes from './ActionTypes'

const initializeFavorite: favoriteState = {
    isLoading: true,
    errMess: null,
    favorites: null
}

export const favoriteReducer = (state: favoriteState = initializeFavorite, action: ActionFavorite) => {
    switch(action.type){
        case ActionTypes.FAVORITES_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case ActionTypes.FAVORITES_FAILED:
            return {
                ...state,
                errMess: action.payload,
                isLoading: false,
                favorites: null
            }

        case ActionTypes.FETCH_FAVORITES:
            return {
                ...state,
                errMess: null,
                isLoading: false,
                favorites: action.payload
            }

        case ActionTypes.ADD_FAVORITE:
            return {
                ...state,
                isLoading: false,
                favorites: action.payload
            }

        case ActionTypes.REMOVE_FAVORITE:
            return {
                ...state,
                isLoading: false,
                favorites: action.payload
            }

        default:
            return state
    }
}