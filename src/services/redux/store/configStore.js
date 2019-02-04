import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default configureStore