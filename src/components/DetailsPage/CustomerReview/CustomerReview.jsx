import React from 'react'
import AllReviews from './AllReviews/AllReviews'
import './customerreview.scss'
import { GoTriangleUp } from 'react-icons/all'

const CustomerReview = () => {
	return (
		<div className="customer-review-container">
			<div className="customer-review-content">
				<div className="headers mb-5">
					<p className="heading mb-2">Customer Reviews</p>
					<p className="description text-muted">
						Nam tempus turpis at metus scelerisque placerat nulla deumantos.
					</p>
					<div className="pointer">
						<GoTriangleUp />
					</div>
				</div>
				<AllReviews />
			</div>
		</div>
	)
}

export default CustomerReview
