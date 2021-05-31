import React from 'react'
import NewReleaseSlider from './NewReleaseSlider/NewReleaseSlider'
import './newreleases.scss'

const NewReleases = () => {
	return (
		<div className="new-release-container pt-5 pb-1 padding-content">
			<div className="new-release-content">
				<div className="heading mb-2">
					<p>New Releases</p>
				</div>
				<div className="tabs">
					<p className="text-muted">Mens</p>
					<p className="text-muted">Womens</p>
					<p className="text-muted">Luxury Watches</p>
					<p className="text-muted">Jewelry</p>
					<p className="text-muted">Accessories</p>
					<p className="text-muted">Special Offers</p>
				</div>
				<NewReleaseSlider />
			</div>
		</div>
	)
}

export default NewReleases
