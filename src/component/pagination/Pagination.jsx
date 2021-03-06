import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Button from '@material-ui/core/Button'
import { getDataTH } from '../../redux/thunks'
import { nextPage, prevPage, startLoader } from '../../redux/actions'

import './pagination.css'

export default function Pagination() {
	const { currentPage, searchQuery, error } = useSelector(state => state)
	const dispatch = useDispatch()

	const handleNextPage = () => {
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

		error ? <div className="error">{error}</div> : (
			searchQuery
			&& (
				<div className="pagination">
					<div className="pagination__leftArrow" onClick={handlePrevPage}>
						<Button variant="contained"><ArrowBackIosIcon /></Button>
					</div>
					{currentPage}
					<div className="pagination__rightArrow" onClick={handleNextPage}>
						<Button variant="contained"><ArrowForwardIosIcon /></Button>
					</div>
				</div>
			)
		))
}
