import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Button from '@material-ui/core/Button'
import { getDataTH } from '../../redux/thunks'
import { nextPage, prevPage, startLoader } from '../../redux/actions'

import './pagination.scss'

export default function Pagination() {
	const { currentPage, searchQuery, error, data, blocksAmountOnPage } = useSelector(state => state)
	const dispatch = useDispatch()

	const handleNextPage = () => {
		if (data?.length < blocksAmountOnPage) return
		dispatch(startLoader())
		dispatch(nextPage())
		dispatch(getDataTH())
	}

	const handlePrevPage = () => {
		dispatch(startLoader())
		dispatch(prevPage())
		dispatch(getDataTH())
	}

	return (

		error
			? <div className="error">{error}</div>
			: (
				searchQuery
				&& (
					<div className="pagination">
						<Button variant="contained" onClick={handlePrevPage}><ArrowBackIosIcon /></Button>
						{currentPage}
						<Button variant="contained" onClick={handleNextPage}><ArrowForwardIosIcon /></Button>
					</div>
				)
			))
}
