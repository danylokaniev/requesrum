import './searchPanel.scss'
import { useSelector, useDispatch, batch } from 'react-redux'
import React, { useState, useCallback, useEffect } from 'react'
import { setSearchQuery, setBlocksAmountOnPage, startLoader, stopLoader, setPage } from '../../redux/actions'
import { getDataTH } from '../../redux/thunks'
// import { getDataTH } from '../../redux/thunks'


const debounce = (f, delay) => {
	let timerId

	return (...args) => {
		clearTimeout(timerId)
		timerId = setTimeout(f, delay, ...args)
	}
}

export default function SearchPanel() {
	const [appliedQuery, setAppliedQuery] = useState('')
	const { searchQuery, blocksAmountOnPage } = useSelector(state => state)
	const dispatch = useDispatch()

	const applyQuery = useCallback(
		debounce(setAppliedQuery, 2000), []
	)

	const onChange = e => {
		const { value } = e.target
		if (!value) {
			dispatch(stopLoader())
		} else {
			dispatch(startLoader())
		}
		dispatch(setSearchQuery(value))
		applyQuery(value)
	}

	useEffect(() => {
		if (searchQuery) {
			addQueryToHistory(searchQuery)
			batch(() => {
				dispatch(setPage(1))
				dispatch(getDataTH())
			})
		}
	}, [appliedQuery])

	const addQueryToHistory = query => {
		const queryHistory = JSON.parse(localStorage.getItem('history')) || []
		if (queryHistory.length === 5) {
			localStorage.setItem('history', JSON.stringify([query, ...queryHistory.slice(0, 4)]))
		} else {
			localStorage.setItem('history', JSON.stringify([query, ...queryHistory]))
		}
	}

	return (
		<div className="search">
			<input className="search__input" onChange={onChange} value={searchQuery} placeholder="Start typing..." />
			<div className="search__history">
				Search history:
				{
					JSON.parse(localStorage.getItem('history'))?.map((item, index) => (
						<div key={`${index} ${item}`}>
							{item}
						</div>
					))
				}
			</div>
		</div>
	)
}
