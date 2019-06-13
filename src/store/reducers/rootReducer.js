import { combineReducers } from 'redux'
import postsReducer from './posts'
import onePostReducer from './onePost'


export default combineReducers({

  posts: postsReducer,
  post: onePostReducer,

})