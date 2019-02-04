import {REQUEST_LOGIN} from '../../constants/typeReducers'
const initialState = {
    users: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {...state, users: action.payload}
        default:
            return state
    }
}

export default loginReducer