import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import {
	BiSearch,
	FaGlobeAmericas,
	FaUndoAlt,
	FaShieldAlt,
	HiOutlineCheckCircle,
} from 'react-icons/all'
import './imagegalleryslider.scss'

const ImageGallerySlider = () => {
	const [innerWidth, setInnerWidth] = useState(500)

	window.addEventListener('resize', () => {
		setInnerWidth(window.innerWidth)
	})

	const images = [
		{
			original:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/01_300x.jpg?v=1569989512',
			thumbnail:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/01_300x.jpg?v=1569989512',
		},
		{
			original:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512',
			thumbnail:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512',
		},
		{
			original:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/09_a49ece6e-94d5-46dd-8c4f-283ef905958e_300x.jpg?v=1569990905',
			thumbnail:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/09_a49ece6e-94d5-46dd-8c4f-283ef905958e_300x.jpg?v=1569990905',
		},
		{
			original:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_c3a5a17a-eed4-469e-9285-fe4b69dc1da1_300x.jpg?v=1594975397',
			thumbnail:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_c3a5a17a-eed4-469e-9285-fe4b69dc1da1_300x.jpg?v=1594975397',
		},
		{
			original:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/07_300x.jpg?v=1593424931',
			thumbnail:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/07_300x.jpg?v=1593424931',
		},
		{
			original:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_300x.jpg?v=1569991091',
			thumbnail:
				'https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_300x.jpg?v=1569991091',
		},
	]
	return (
		<div className="image-gallery col-lg-6 col-md-12 col-sm-12">
			<ImageGallery
				infinite
				thumbnailPosition={innerWidth < 500 ? 'bottom' : 'left'}
				showPlayButton={false}
				showFullscreenButton={false}
				useBrowserFullscreen
				slideDuration={100}
				showNav={false}
				items={images}
			/>
			<div className="zoom-image-text text-muted my-4">
				<BiSearch /> <p>Zoom the image with the mouse</p>
			</div>
			<div className="ask-expert-btn mb-5">
				<button>Ask an expert</button>
			</div>
			<div className="our-services mb-3">
				<div className="service">
					<FaGlobeAmericas />
					<p className="mt-2">Free shipping worldwide</p>
				</div>
				<div className="service">
					<FaUndoAlt />
					<p className="mt-2">Free in-store returns</p>
				</div>
				<div className="service">
					<FaShieldAlt />
					<p className="mt-2">Secure shopping guarantee</p>
				</div>
				<div className="service">
					<HiOutlineCheckCircle />
					<p className="mt-2">24 month warranty</p>
				</div>
			</div>
		</div>
	)
}

export default ImageGallerySlider
