import {
	NEXT_PAGE,
	PREV_PAGE,
	SET_PAGE,
	SET_DATA,
	SET_ERROR,
	REMOVE_DATA,
	START_LOADER,
	STOP_LOADER,
	SET_BLOCKS_AMOUNT_ON_PAGE,
	SET_SEARCH_QUERY,
} from './const'

export const nextPage = () => ({ type: NEXT_PAGE })
export const prevPage = () => ({ type: PREV_PAGE })
export const setPage = page => ({ type: SET_PAGE, page })
export const setError = error => ({ type: SET_ERROR, error })
export const startLoader = () => ({ type: START_LOADER })
export const stopLoader = () => ({ type: STOP_LOADER })
export const setData = data => ({ type: SET_DATA, data })
export const setBlocksAmountOnPage = amount => ({ type: SET_BLOCKS_AMOUNT_ON_PAGE, amount })
export const removeData = () => ({ type: REMOVE_DATA })
export const setSearchQuery = query => ({ type: SET_SEARCH_QUERY, query })
