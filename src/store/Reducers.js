import { combineReducers } from 'redux'

import UserReducer from './reducers/UserReducer'
import ProductReducer from './reducers/ProductReducer'
import DeteilReducer from './reducers/DeteilReducer'

export default combineReducers({
	UserReducer,
	ProductReducer,
	DeteilReducer,
});