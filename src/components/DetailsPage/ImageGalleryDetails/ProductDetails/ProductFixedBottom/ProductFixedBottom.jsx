import React from 'react'
import './productfixedbottom.scss'

const ProductFixedBottom = ({ scrollFixed }) => {
	return (
		<div
			className={`${
				scrollFixed < -800
					? 'product-fixed-bottom-container visible'
					: 'product-fixed-bottom-container'
			} `}
		>
			<div className="product-fixed-bottom-content">
				<div className="product-image mx-2">
					<img
						src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/01_300x.jpg?v=1569989512"
						alt=""
					/>
				</div>
				<p className="product-name mx-2">Ninterdum Pre De Condimento</p>
				<div className="selector mx-2">
					<select value="Blue / XS / Leather - $850.00">
						<option>Blue / XS / Leather - $850.00</option>
						<option>Blue / XS / Leather - $850.00</option>
						<option>Blue / XS / Leather - $850.00</option>
						<option>Blue / XS / Leather - $850.00</option>
					</select>
				</div>
				<div className="quantity mx-2">
					<div className="subtract">-</div>
					<div className="number">1</div>
					<div className="add">+</div>
				</div>
				<button className="add-to-cart-btn mx-2">Add to cart</button>
			</div>
		</div>
	)
}

export default ProductFixedBottom
