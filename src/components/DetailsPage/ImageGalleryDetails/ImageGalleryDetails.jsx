import React from 'react'
import ImageGallerySlider from './ImageGallery/ImageGallerySlider'
import ProductDetails from './ProductDetails/ProductDetails'
import './imagegallerydetails.scss'

const ImageGalleryDetails = ({ scrollFixed }) => {
	return (
		<div className="image-gallery-details-container detail-top-content-padding">
			<div className="image-gallery-details-content row">
				<ImageGallerySlider />
				<ProductDetails scrollFixed={scrollFixed} />
			</div>
		</div>
	)
}

export default ImageGalleryDetails
