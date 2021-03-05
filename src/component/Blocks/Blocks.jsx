import React from 'react'
import './blocks.css'
import { useSelector } from 'react-redux'
import Block from '../block/Block'

export default function Blocks() {
	const { data } = useSelector(state => state)
	return (
		<div className="blocks">
			{
				data.map(gitPage => (<Block key={gitPage.id} name={gitPage.name} description={gitPage.description} organizationsUrl={gitPage.owner.organizations_url} />))
			}
		</div>

	)
}
