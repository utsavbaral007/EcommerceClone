import React from 'react'
import ProductDetailsTop from './ProductDetailsTop/ProductDetailsTop'
import ProductDetailsBottom from './ProductDetailsBottom/ProductDetailsBottom'
import ProductFixedBottom from './ProductFixedBottom/ProductFixedBottom'
import './productdetails.scss'

const ProductDetails = ({ scrollFixed }) => {
	return (
		<div className="product-details col-lg-6 col-md-12 col-sm-12">
			<ProductDetailsTop />
			<ProductDetailsBottom />
			<ProductFixedBottom scrollFixed={scrollFixed} />
		</div>
	)
}

export default ProductDetails
