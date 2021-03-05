import {
	NEXT_PAGE,
	PREV_PAGE,
	SET_DATA,
	REMOVE_DATA,
	START_LOADER,
	FINISH_LOADER,
	SET_BLOCKS_AMOUNT_ON_PAGE,
	SET_SEARCH_QUERY,
	ADD_QUERY_TO_HISTORY
} from './const'

export const nextPage = () => ({ type: NEXT_PAGE })
export const prevPage = () => ({ type: PREV_PAGE })
export const startLoader = () => ({ type: START_LOADER })
export const finishLoader = () => ({ type: FINISH_LOADER })
export const setData = data => ({ type: SET_DATA, data })
export const setBlocksAmountOnPage = amount => ({ type: SET_BLOCKS_AMOUNT_ON_PAGE, amount })
export const removeData = () => ({ type: REMOVE_DATA })
export const setSearchQuery = query => ({ type: SET_SEARCH_QUERY, query })
export const addQueryToHistory = query => ({ type: ADD_QUERY_TO_HISTORY, query })
