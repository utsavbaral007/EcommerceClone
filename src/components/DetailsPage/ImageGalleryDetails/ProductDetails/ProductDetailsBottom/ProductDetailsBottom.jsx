import React, { useState, useEffect } from 'react'
import {
	RiRulerLine,
	BsHeart,
	FaFacebookF,
	FaTwitter,
	FaPinterestP,
	BsGrid3X3Gap,
	RiPushpin2Fill,
	BsFillHeartFill,
	AiFillMail,
	BiPlus,
} from 'react-icons/all'
import './productdetailsbottom.scss'
import { InputGroup } from 'react-bootstrap'

const ProductDetailsBottom = () => {
	const [customerCount, setCustomerCount] = useState(0)
	const [addedToWishList, setAddedToWishList] = useState(false)

	useEffect(() => {
		setInterval(() => {
			setCustomerCount((Math.random() * 100).toFixed(0))
		}, 5000)
	}, [])

	return (
		<div className="product-details-bottom">
			<button className="add-to-cart-btn mb-3">Add to cart</button>
			<InputGroup className="checkbox mb-4 mt-3">
				<InputGroup.Checkbox />
				<p>I agree with the terms and conditions</p>
			</InputGroup>
			<button disabled className="buy-it-now-btn mb-3">
				Buy it now
			</button>
			<div className="chart-area mb-3">
				<div className="size-chart">
					<RiRulerLine />
					<p>Size Chart</p>
				</div>
				<div
					onClick={() => setAddedToWishList(!addedToWishList)}
					className={`${
						addedToWishList ? 'added-to-wish-list' : ''
					} size-chart`}
				>
					<BsHeart />
					<p>{addedToWishList ? 'Remove Wish List' : 'Add to Wish List'}</p>
				</div>
			</div>
			<p className="customer-count mb-3">
				{customerCount} customers are viewing this product
			</p>
			<div className="social-icons mb-4">
				<FaFacebookF />
				<FaTwitter />
				<FaPinterestP />
				<BsGrid3X3Gap />
				<RiPushpin2Fill />
				<BsFillHeartFill />
				<AiFillMail />
				<BiPlus />
			</div>
			<div className="trusted-source">
				<img
					src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/seal-logo-1-compressor_x36.jpg?v=1566370172"
					alt=""
				/>
				<img
					src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/seal-logo-2-compressor_x36.jpg?v=1566370181"
					alt=""
				/>
				<img
					src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/seal-logo-3-compressor_x36.jpg?v=1566370189"
					alt=""
				/>
				<img
					src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/seal-logo-4-compressor_x36.jpg?v=1566370198"
					alt=""
				/>
			</div>
		</div>
	)
}

export default ProductDetailsBottom
