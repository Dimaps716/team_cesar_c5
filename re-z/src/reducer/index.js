/* import { combineReducers } from 'redux'; */
/* import userReducer from './userReducer' */

const reducer = (state, action) => {
    
    switch (action.type) {
        case 'SET_FAVORITE':
            return{
                ...state,
                favoritos: [...state.favoritos, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;