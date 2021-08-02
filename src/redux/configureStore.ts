import { createStore, applyMiddleware, combineReducers } from 'redux'
import { movieReducer } from './movieReducer'
import { commentReducer } from './commentReducer'
import { favoriteReducer } from './favoriteReducer'
import { Auth } from './Auth'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(combineReducers({
        movies: movieReducer,
        comments: commentReducer,
        favorites: favoriteReducer,
        auth: Auth
    }),
    applyMiddleware(thunk, logger))

export const ConfigureStore = () => {
    return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {movies: movieReducer}
export type AppDispatch = typeof store.dispatch