import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { getDataTH } from '../../redux/thunks'
import { nextPage, prevPage, startLoader } from '../../redux/actions'
import './pagination.css'

export default function Pagination() {
	const { currentPage } = useSelector(state => state)
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
		<div className="pagination">
			<div className="pagination__leftArrow" onClick={handlePrevPage}>
				<ArrowBackIosIcon />
			</div>
			page number
			{currentPage}
			<div className="pagination__rightArrow" onClick={handleNextPage}>
				<ArrowForwardIosIcon />
			</div>
		</div>
	)
}
