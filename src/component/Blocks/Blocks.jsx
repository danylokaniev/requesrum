import React from 'react'
import './blocks.css'
import { useSelector } from 'react-redux'
import Block from '../block/Block'
import Loader from '../loader/Loader'

export default function Blocks() {
	const { data, loader, blocksAmountOnPage } = useSelector(state => state)
	return (
		<div className="blocks">
			{
				loader
					? new Array(+blocksAmountOnPage)?.fill(0)?.map(_ => (<Loader />))
					: data?.map(gitPage => (<Block key={gitPage.id} name={gitPage.name} description={gitPage.description} organizationsUrl={gitPage.owner.organizations_url} />))
			}

		</div>

	)
}
