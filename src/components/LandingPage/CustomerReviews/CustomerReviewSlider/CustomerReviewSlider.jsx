import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/all'
import './customerreviewslider.scss'

const CustomerReviewSlider = () => {
	const responsive = {
		0: { items: 1 },
		568: { items: 1 },
		768: { items: 2 },
		1024: { items: 3 },
	}
	return (
		<div className="customer-review-slider">
			<AliceCarousel
				mouseTracking
				infinite
				responsive={responsive}
				animationDuration={1000}
			>
				<div className="customer-review-card">
					<div className="product-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/02_115x.jpg?v=1569996170"
							alt=""
						/>
					</div>
					<div className="ratings mt-1 mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="purchased text-muted my-3">
						Purchased: <Link>Lorem ipsum dolor.</Link>
					</p>
					<div className="comments text-muted mb-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						possimus esse, optio ducimus at alias! Corporis inventore,
						voluptatum fugiat dolorem odit ut aliquid iure quos eligendi veniam
						necessitatibus voluptates quis!
					</div>
					<p className="client-name">John Doe</p>
				</div>
				<div className="customer-review-card">
					<div className="product-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/06_115x.jpg?v=1569996314"
							alt=""
						/>
					</div>
					<div className="ratings mt-1 mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="purchased text-muted my-3">
						Purchased: <Link>Lorem ipsum dolor.</Link>
					</p>
					<div className="comments text-muted mb-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						possimus esse, optio ducimus at alias! Corporis inventore,
						voluptatum fugiat dolorem odit ut aliquid iure quos eligendi veniam
						necessitatibus voluptates quis!
					</div>
					<p className="client-name">John Doe</p>
				</div>
				<div className="customer-review-card">
					<div className="product-image">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/07_115x.jpg?v=1569996323"
							alt=""
						/>
					</div>
					<div className="ratings mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="purchased text-muted my-3">
						Purchased: <Link>Lorem ipsum dolor.</Link>
					</p>
					<div className="comments text-muted mb-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						possimus esse, optio ducimus at alias! Corporis inventore,
						voluptatum fugiat dolorem odit ut aliquid iure quos eligendi veniam
						necessitatibus voluptates quis!
					</div>
					<p className="client-name">John Doe</p>
				</div>
			</AliceCarousel>
		</div>
	)
}

export default CustomerReviewSlider
