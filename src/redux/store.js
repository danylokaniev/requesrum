import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
	NEXT_PAGE,
	PREV_PAGE,
	SET_PAGE,
	SET_ERROR,
	SET_DATA,
	REMOVE_DATA,
	START_LOADER,
	STOP_LOADER,
	SET_BLOCKS_AMOUNT_ON_PAGE,
	SET_SEARCH_QUERY,
} from './const'

const initialState = {
	loader: false,
	data: [],
	currentPage: 1,
	blocksAmountOnPage: 8,
	searchQuery: '',
	error: ''
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT_PAGE:
			return { ...state, currentPage: state.currentPage + 1 }

		case PREV_PAGE:
			return { ...state, currentPage: state.currentPage - 1 > 1 ? state.currentPage - 1 : 1 }

		case SET_DATA:
			return { ...state, data: action.data }

		case SET_PAGE:
			return { ...state, currentPage: action.page }

		case SET_ERROR:
			return { ...state, error: action.error }

		case SET_SEARCH_QUERY:
			return { ...state, searchQuery: action.query }

		case SET_BLOCKS_AMOUNT_ON_PAGE:
			return { ...state, blocksAmountOnPage: action.amount }

		case REMOVE_DATA:
			return { ...state, data: [] }

		case START_LOADER:
			return { ...state, loader: true }

		case STOP_LOADER:
			return { ...state, loader: false }

		default: return state
	}
}



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

window.store = store


export default store
