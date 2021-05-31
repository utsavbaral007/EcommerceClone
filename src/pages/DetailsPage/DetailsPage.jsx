import React from 'react'
import ImageGalleryDetails from '../../components/DetailsPage/ImageGalleryDetails/ImageGalleryDetails'
import ProductDescription from '../../components/DetailsPage/ProductDescription/ProductDescription'
import MetropolisBackground from '../../components/DetailsPage/MetropolisBackground/MetropolisBackground'
import SubBanner from '../../components/DetailsPage/SubBanner/SubBanner'
import RelatedProducts from '../../components/DetailsPage/RelatedProducts/RelatedProducts'
import CustomerReview from '../../components/DetailsPage/CustomerReview/CustomerReview'

const DetailsPage = ({ scrollFixed }) => {
	return (
		<div className="details-page-container">
			<ImageGalleryDetails scrollFixed={scrollFixed} />
			<ProductDescription />
			<MetropolisBackground />
			<SubBanner />
			<RelatedProducts />
			<CustomerReview />
		</div>
	)
}

export default DetailsPage
