import * as types from './types.jsx'
// Initial (starting) state
export const initialState = {
    "persons": []
}

// Our root reducer starts with the initial state
// and must return a representation of the next state
export const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case types.FETCH_TODOS:
            return { ...state, persons : action.payload}
        default:
            return state;
    }
} 