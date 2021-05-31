import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import './customblockslider.scss'

const CustomBlockSlider = () => {
	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 3 },
	}
	return (
		<div className="custom-block-slider">
			<AliceCarousel
				mouseTracking
				infinite
				responsive={responsive}
				animationDuration={1500}
				disableButtonsControls
			>
				<div className="custom-block-card">
					<div className="card-img-container">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/banner_1_800x800_crop_center.jpg?v=1569987549"
							alt=""
						/>
					</div>
					<div className="card-img-description">
						<p className="card-heading">Metropolis</p>
						<p className="card-sub-heading">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
				</div>
				<div className="custom-block-card">
					<div className="card-img-container">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/custom-block-2-compressor_800x800_crop_center.jpg?v=1566286129"
							alt=""
						/>
					</div>
					<div className="card-img-description">
						<p className="card-heading">Milancelos</p>
						<p className="card-sub-heading">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
				</div>
				<div className="custom-block-card">
					<div className="card-img-container">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/custom-block-3-compressor_800x800_crop_center.jpg?v=1566286139"
							alt=""
						/>
					</div>
					<div className="card-img-description">
						<p className="card-heading">Cosmopolis</p>
						<p className="card-sub-heading">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
				</div>
				<div className="custom-block-card">
					<div className="card-img-container">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/banner_1_800x800_crop_center.jpg?v=1569987549"
							alt=""
						/>
					</div>
					<div className="card-img-description">
						<p className="card-heading">Metropolis</p>
						<p className="card-sub-heading">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
				</div>
			</AliceCarousel>
		</div>
	)
}

export default CustomBlockSlider
