import React from 'react'
import './block.css'

export default function Block({ name, organizationsUrl, description }) {
	return (
		<div className="block">
			<div className="block__name">{name}</div>
			<div className="block__organization">{description}</div>
			<div className="block__description">{organizationsUrl}</div>
		</div>
	)
}
