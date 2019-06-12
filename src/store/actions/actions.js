import {SET_POSTS} from "./actionsTypes";


export function setPosts(posts) {
    return {
        type: SET_POSTS,
        payload: posts,
    }
}