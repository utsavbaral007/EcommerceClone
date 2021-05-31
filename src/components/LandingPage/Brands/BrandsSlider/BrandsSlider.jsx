import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import './brandsslider.scss'

const BrandsSlider = () => {
	const responsive = {
		0: { items: 2 },
		568: { items: 3 },
		1024: { items: 5 },
	}
	return (
		<div className="brands-slider">
			<AliceCarousel
				mouseTracking
				responsive={responsive}
				animationDuration={1500}
				disableButtonsControls
			>
				<div className="brands-card">
					<div className="brand-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/image-brands-1-compressor_200x.jpg?v=1566286879"
							alt=""
						/>
					</div>
				</div>
				<div className="brands-card">
					<div className="brand-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/image-brands-2-compressor_200x.jpg?v=1566286891"
							alt=""
						/>
					</div>
				</div>
				<div className="brands-card">
					<div className="brand-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/image-brands-3-compressor_200x.jpg?v=1566286899"
							alt=""
						/>
					</div>
				</div>
				<div className="brands-card">
					<div className="brand-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/image-brands-4-compressor_200x.jpg?v=1566286908"
							alt=""
						/>
					</div>
				</div>
				<div className="brands-card">
					<div className="brand-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/image-brands-5-compressor_200x.jpg?v=1566286916"
							alt=""
						/>
					</div>
				</div>
				<div className="brands-card">
					<div className="brand-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/image-brands-3-compressor_200x.jpg?v=1566286899"
							alt=""
						/>
					</div>
				</div>
			</AliceCarousel>
		</div>
	)
}

export default BrandsSlider
