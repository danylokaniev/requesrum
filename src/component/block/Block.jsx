import React from 'react'
import './block.scss'

export default function Block({ name, organizationsUrl, description }) {
	return (
		<div className="block">
			<div>{name}</div>
			<div>{description}</div>
			<div>{organizationsUrl}</div>
		</div>
	)
}
