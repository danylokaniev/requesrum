import { batch } from 'react-redux'

import { setData, finishLoader } from './actions'


/**GET */
export const getDataTH = () => (dispatch, getState) => {
	const { blocksAmountOnPage, currentPage, searchQuery } = getState()

	fetch(`https://api.github.com/search/repositories?q=${searchQuery}&page=${currentPage}&per_page=${blocksAmountOnPage}`)
		.then(data => data.json())
		.then(data => batch(() => {
			dispatch(setData(data.items))
			dispatch(finishLoader())
		}))
		.catch(e => console.error(e))
}
