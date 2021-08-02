import { commentsFailed } from './ActionCreators';
import * as ActionTypes from './ActionTypes';

export const commentReducer = (state: commentState = {
        errMess: null,
        comments: [] as comment[]
    }, action: ActionComment) => {
    switch(action.type) {
        case ActionTypes.FETCH_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment as comment)};

        case ActionTypes.DELETE_COMMENT:
            let cmt = action.payload as comment
            return {...state, isLoading: false, errMess: null,
                comments: state.comments.filter(item => item._id !== cmt._id)}

        default:
            return state;
    }
}