import './searchPanel.css'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useCallback, useEffect } from 'react'
import { setSearchQuery, setBlocksAmountOnPage } from '../../redux/actions'
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
	const { searchQuery, blocksAmountOnPage, queryHistory } = useSelector(state => state)
	const dispatch = useDispatch()

	const applyQuery = useCallback(
		debounce(setAppliedQuery, 2000), []
	)

	const onChange = e => {
		const { value } = e.target
		dispatch(setSearchQuery(value))
		applyQuery(value)
	}

	useEffect(() => {
		if (searchQuery) dispatch(getDataTH())
	}, [appliedQuery])


	return (
		<div className="search">
			<input className="search__input" onChange={onChange} value={searchQuery} />
			<div className="search__history">
				Search history:
				{
					queryHistory.map(item => (
						<div className="search__item" key={item}>
							{item}
						</div>
					))
				}
			</div>
			<input
				type="number"
				list="browsers"
				value={blocksAmountOnPage}
				onChange={e => dispatch(setBlocksAmountOnPage(e.target.value))}
			/>

			<datalist id="browsers">
				<option value="5" />
				<option value="8" />
				<option value="10" />
				<option value="15" />
				<option value="20" />
			</datalist>
		</div>
	)
}
