import { combineReducers } from 'redux'

import UserReducer from './reducers/UserReducer'
import ProductReducer from './reducers/ProductReducer'

export default combineReducers({
	UserReducer,
	ProductReducer,
});