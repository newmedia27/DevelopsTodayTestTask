import { SET_ONE_POST, SET_POSTS } from './actionsTypes'


export function setPosts(posts) {
    return {
        type: SET_POSTS,
        payload: posts,
    }
}
export function setPost(post) {
    return {
        type: SET_ONE_POST,
        payload: post,
    }
}