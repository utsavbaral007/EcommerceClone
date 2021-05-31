import React, { useState } from 'react'
import ProductSpecs from './ProductSpecs/ProductSpecs'
import ProductSize from './ProductSize/ProductSize'
import './productdescription.scss'

const ProductDescription = () => {
	const [toggleDescription, setToggleDescription] = useState(true)
	return (
		<div className="product-description-container py-5 padding-content">
			<div className="product-description-content row">
				<div className="left-content col-lg-6 col-md-6 col-sm-12">
					<img
						src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_800x800.jpg?v=1569991091"
						alt=""
					/>
				</div>
				<div className="right-content col-lg-6 col-md-6 col-sm-12">
					<p className="heading mb-3">Description</p>
					<div className="specs-btns mb-4">
						<button
							onClick={() => setToggleDescription(true)}
							className={`${toggleDescription ? 'active' : ''}`}
						>
							The specs
						</button>
						<button
							onClick={() => setToggleDescription(false)}
							className={`${!toggleDescription ? 'active' : ''}`}
						>
							Size
						</button>
					</div>
					{toggleDescription ? <ProductSpecs /> : <></>}
					{!toggleDescription ? <ProductSize /> : <></>}
				</div>
			</div>
		</div>
	)
}

export default ProductDescription
