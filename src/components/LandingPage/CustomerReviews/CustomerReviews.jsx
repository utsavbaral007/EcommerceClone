import React from 'react'
import CustomerReviewSlider from './CustomerReviewSlider/CustomerReviewSlider'
import './customerreview.scss'

const CustomerReviews = () => {
	return (
		<div className="customer-reviews-container pt-5 padding-content">
			<div className="customer-reviews-content">
				<p className="heading">Customer reviews</p>
				<p className="description mt-2 mb-4 text-muted">
					Nam tempus turpis at metus scelerisque placerat nulla deumantos.
				</p>
				<CustomerReviewSlider />
			</div>
		</div>
	)
}

export default CustomerReviews
