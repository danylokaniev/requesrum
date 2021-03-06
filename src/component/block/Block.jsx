import React from 'react'
import './block.scss'

export default function Block({ name, language, description }) {
	return (
		<div className="block">
			<div>
				{name || 'No data'}
			</div>
			<div>
				language:
				{' '}
				{language || 'No data'}
			</div>
			<div>
				description:
				{' '}
				{description || 'No data'}
			</div>
		</div>
	)
}
