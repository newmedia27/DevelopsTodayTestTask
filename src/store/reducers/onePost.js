import { SET_ONE_POST } from '../actions/actionsTypes'

const initialState = {
  post: [],
}
export default function onePostReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ONE_POST:
      return {
        post: action.payload,
      }
    default:
      return state
  }
}