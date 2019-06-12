import {TEST} from "../actions/actionsTypes";

const initialState = {
  test:'test'
}

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case TEST:
            return {
                ...state,
            }


        default:
            return state
    }
}