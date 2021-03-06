import { batch } from 'react-redux'

import { setData, stopLoader, setError } from './actions'


/**GET */
export const getDataTH = () => (dispatch, getState) => {
	const { blocksAmountOnPage, currentPage, searchQuery } = getState()

	fetch(`https://api.github.com/search/repositories?q=${searchQuery}&page=${currentPage}&per_page=${blocksAmountOnPage}`)
		.then(response => {
			if (!response.ok) {
				// this error occur when unauthorized user create too many requests
				if (response.status === 403) dispatch(setError('Too many requests. Try to reload page'))
				else dispatch(setError(response.statusText))
			}
			return response
		})
		.then(data => data.json())
		.then(data => batch(() => {
			dispatch(setData(data.items))
		}))
		.finally(() => dispatch(stopLoader()))
}
