import React from 'react'
import ContentLoader from 'react-content-loader'
import './loader.scss'

export default function Loader() {
	return (
		<div className="loader">
			<ContentLoader
				speed={1}
				width={375}
				height={110}
				viewBox="0 0 400 110"
				backgroundColor="gray"
				foregroundColor="#ded9d9"
			>
				<rect x="4" y="6" rx="3" ry="3" width="88" height="18" />
				<rect x="4" y="48" rx="3" ry="3" width="410" height="11" />
				<rect x="4" y="67" rx="3" ry="3" width="399" height="11" />
				<rect x="4" y="98" rx="3" ry="3" width="178" height="14" />
			</ContentLoader>
		</div>
	)
}
