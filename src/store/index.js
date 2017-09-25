import { applyMiddleware, createStore,  combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { venuesReducer } from '../reducers'

let store = null
export default {
	createStore: () => {
		const reducers = combineReducers({
			venues: venuesReducer
		})
		store = createStore(
			reducers,
			applyMiddleware(thunk, logger)
		)

		return store
	},

	currentStore: () => {
		return store
	}

}