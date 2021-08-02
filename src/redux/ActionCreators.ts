import * as ActionTypes from './ActionTypes'
import baseUrl from '../shared/baseUrl'

export const fetchMovies = () => (dispatch: DispatchMovie) => {
    dispatch(moviesLoading())

    return fetch(baseUrl + "movies")
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(movies => dispatch(addMovies(movies)))
    .catch(error => dispatch(moviesFailed(error.message)));
}

export const addMovies = (movies: movie[]): ActionMovie => ({
    type: ActionTypes.FETCH_MOVIES,
    payload: movies
})

export const moviesLoading = (): ActionMovie => ({
    type: ActionTypes.MOVIES_LOADING
})

export const moviesFailed = (errMess: string): ActionMovie => ({
    type: ActionTypes.MOVIES_FAILED,
    payload: errMess
})

//FETCH FAVORITES
export const fetchFavorites = () => (dispatch: DispatchFavorite) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    dispatch(favoritesLoading())

    return fetch(baseUrl + "favorites", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const addFavorites = (favor: favorite): ActionFavorite => ({
    type: ActionTypes.FETCH_FAVORITES,
    payload: favor
})

export const favoritesLoading = (): ActionFavorite => ({
    type: ActionTypes.FAVORITES_LOADING,
    payload: ''
})

export const favoritesFailed = (errMess: string): ActionFavorite => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errMess
})

export const addFavor = (favorId: string) => (dispatch: DispatchFavorite) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + `favorites/${favorId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(favor => dispatch(addFavorites(favor)))
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const removeFavor = (favorId: string) => (dispatch: DispatchFavorite) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    console.log("remove ~~~~~~~~~~~~")
    return fetch(baseUrl + `favorites/${favorId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(favor => dispatch(deleteFavor(favor)))
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavor = (favor: favorite): ActionFavorite => ({
    type: ActionTypes.REMOVE_FAVORITE,
    payload: favor
})

// FETCH COMMENTS
export const fetchComments = () => (dispatch: DispatchComment) => {

    return fetch(baseUrl + "comments")
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const addComments = (comments: comment[]): ActionComment => ({
    type: ActionTypes.FETCH_COMMENTS,
    payload: comments
})

export const commentsFailed = (errMess: string): ActionComment => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
})

export const addComment = (comment: comment): ActionComment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const postComment = (movieId: string, comment: string) => (dispatch: DispatchComment) => {

    const newComment = {
        comment: comment,
        movie: movieId
    }
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post comments ', error.message);
                      alert('Your comment could not be posted\nError: '+ error.message + '. Please login before comment'); })
}

export const deleteComment = (commentId: string) => (dispatch: DispatchComment) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'comments/' + commentId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(deleteCmt(response)))
    .catch(error => alert("You aren't author of this comment. Can't delete. Error: " + error))
}

export const deleteCmt = (comment: comment) => ({
    type: ActionTypes.DELETE_COMMENT,
    payload: comment
})

//Authenticate User:
export const requestLogin = (creds: user) => ({
    type: ActionTypes.LOGIN_REQUEST,
    creds: creds
})
  
export const receiveLogin = (response: userState) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token
})
  
export const loginError = (message: string|null) => ({
    type: ActionTypes.LOGIN_FAILURE,
    message: message
})

export const loginUser = (creds: user) => (dispatch: any) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            // dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
            dispatch(fetchFavorites())
        }
        else {
            var error = new Error('Error ' + response.status);
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => ({
      type: ActionTypes.LOGOUT_REQUEST
})
  
export const receiveLogout = () => ({
      type: ActionTypes.LOGOUT_SUCCESS
})

// Logs the user out
export const logoutUser = () => (dispatch: DispatchUser) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    // dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
    dispatch(favoritesFailed("401: Unauthorized"))
}

// SIGN UP USER
export const signupUser = (creds: user) => (dispatch: DispatchUser) => {
    dispatch(requestSignup(creds))

    return fetch(baseUrl + 'users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success)
            alert("Sign up successfully, now let login")
        else 
            alert("sign up failed")
    })
    .catch(err => dispatch(signupError(err.message)))
}

export const requestSignup = (creds: user) => ({
    type: ActionTypes.REQUEST_SIGNUP,
    creds: creds
})

export const receiveSignup = () => (dispatch: DispatchUser) => ({
    type: ActionTypes.SIGNUP_SUCCESS
})

export const signupError = (message: string|null) => ({
    type: ActionTypes.SIGNUP_FAILURE,
    message: message
})