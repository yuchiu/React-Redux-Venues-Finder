import { applyMiddleware, createStore,  combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { todoReducer } from '../reducers'

let store = null
export default {
	createStore: () => {
		const reducers = combineReducers({
			todo: todoReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}

}