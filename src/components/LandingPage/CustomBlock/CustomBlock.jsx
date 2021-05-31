import React from 'react'
import './customblock.scss'
import CustomBlockSlider from './CustomBlockSlider/CustomBlockSlider'

const CustomBlock = () => {
	return (
		<div className="custom-block-container pb-4 padding-content">
			<div className="custom-block-content">
				<p className="heading">Custom block</p>
				<p className="description text-muted my-3">
					Nam tempus turpis at metus scelerisque placerat nulla deumantos
					sollicitudino.
				</p>
				<CustomBlockSlider />
				<div className="view-all-btn my-4">
					<button>View all videos</button>
				</div>
			</div>
		</div>
	)
}

export default CustomBlock
