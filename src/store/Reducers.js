import { combineReducers } from 'redux'

import UserReducer from './reducers/UserReducer'
import ProductReducer from './reducers/ProductReducer'
import DeteilReducer from './reducers/DeteilReducer'
import SearchReducer from './reducers/SearchReducer'

export default combineReducers({
	UserReducer,
	ProductReducer,
	DeteilReducer,
	SearchReducer,
});