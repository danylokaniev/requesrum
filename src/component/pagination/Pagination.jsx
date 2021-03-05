import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextPage, prevPage } from '../../redux/actions'
import './pagination.css'

export default function Pagination() {
	const { currentPage, blocksAmountOnPage } = useSelector(state => state)
	const dispatch = useDispatch()
	return (
		<div className="pagination">
			<div className="pagination__leftArrow" onClick={() => dispatch(prevPage())}>
				left

			</div>
			page number
			{currentPage}
			<div className="pagination__rightArrow" onClick={() => dispatch(nextPage())}>
				right
				{blocksAmountOnPage}
			</div>
		</div>
	)
}
