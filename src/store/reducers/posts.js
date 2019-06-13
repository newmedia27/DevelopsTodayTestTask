import {SET_POSTS} from "../actions/actionsTypes";

const initialState = {
    posts: []
}

export default function postsReducer(state = initialState, action) {

    switch (action.type){
        case SET_POSTS:
            return {
                posts: action.payload,
            };

        default:
            return state
    }
}