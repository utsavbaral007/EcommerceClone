import React from 'react'
import BrandsSlider from './BrandsSlider/BrandsSlider'
import './brands.scss'

const Brands = () => {
	return (
		<div className="brands-container pb-5 padding-content">
			<div className="brands-content">
				<BrandsSlider />
				<div className="view-all-btn">
					<button>View all brands</button>
				</div>
			</div>
		</div>
	)
}

export default Brands
