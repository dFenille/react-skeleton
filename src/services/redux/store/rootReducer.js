import {combineReducers} from 'redux'
import loginReducer from '../reducers/loginReducer' 

const combineReds = combineReducers({
    login: loginReducer,
})


export default combineReds