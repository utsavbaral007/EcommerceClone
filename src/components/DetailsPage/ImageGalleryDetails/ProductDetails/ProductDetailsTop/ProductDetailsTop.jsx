import React, { useState, useRef, useEffect } from 'react'
import { AiFillStar, FaFire, CgAsterisk } from 'react-icons/all'
import './productdetailstop.scss'

const ProductDetailsTop = () => {
	const [color, setColor] = useState('black')
	const [size, setSize] = useState('XS')
	const [XSsize, setXSsize] = useState('XS')
	const [Ssize, setSsize] = useState('')
	const [Msize, setMsize] = useState('')
	const [Lsize, setLsize] = useState('')
	const [Xsize, setXsize] = useState('')
	const [XLsize, setXLsize] = useState('')
	const [quantity, setQuantity] = useState(1)

	return (
		<div className="product-details-top">
			<p className="brand-name mb-2">Anna</p>
			<p className="watch-name mb-2">Ninterdum Pre De Condimento</p>
			<div className="reviews mb-3">
				<div className="review-count">
					<div className="stars">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="reviews-count text-muted">2 reviews</p>
				</div>
				<div className="sale-track">
					<FaFire />
					<p>10 sold in last 15 hours</p>
				</div>
			</div>
			<p className="stock-info mb-3">In stock</p>
			<div className="sku-unit mb-3">
				<p>
					SKU: <span className="text-muted">DP1</span>
				</p>
			</div>
			<p className="price mb-3">$870.00</p>
			<p className="comments mb-3 text-muted">
				Nam tempus turpis at metus scelerisque placerat nulla deumantos
				sollicitudin delos felis. Pellentesquae diam dolor an elementum et
				lobortis at mollis ut risus. Curabitur semper sagittis mino de
				condimentum. Donec an mullamcorper mauris. Lorem ipsum dolor sit amet
				consectetur curabitur porttitor. Pellentesque habitant morbi tristique
				senectus et netus et malesuada...
			</p>
			<div className="color mb-3">
				<p>
					Color
					<span>
						<CgAsterisk />
					</span>
				</p>
				<div className="more-watches">
					<div className="watches">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_1024x1024.jpg?v=1569991085"
							alt=""
						/>
					</div>
					<div className="watches">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/12_671ef0a6-90f5-4dd3-8491-d8dd4dbeba49_compact.jpg?v=1569991085"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="size mb-3">
				<p>
					Sizes
					<span>
						<CgAsterisk />
					</span>
				</p>
				<div className="sizes">
					<p
						className={`${size === XSsize ? 'active' : ''}`}
						onClick={(e) => {
							setSize(e.target.innerHTML)
							setXSsize(e.target.innerHTML)
						}}
					>
						XS
					</p>
					<p
						className={`${size === Ssize ? 'active' : ''}`}
						onClick={(e) => {
							setSize(e.target.innerHTML)
							setSsize(e.target.innerHTML)
						}}
					>
						S
					</p>
					<p
						className={`${size === Msize ? 'active' : ''}`}
						onClick={(e) => {
							setSize(e.target.innerHTML)
							setMsize(e.target.innerHTML)
						}}
					>
						M
					</p>
					<p
						className={`${size === Lsize ? 'active' : ''}`}
						onClick={(e) => {
							setSize(e.target.innerHTML)
							setLsize(e.target.innerHTML)
						}}
					>
						L
					</p>
					<p
						className={`${size === Xsize ? 'active' : ''}`}
						onClick={(e) => {
							setSize(e.target.innerHTML)
							setXsize(e.target.innerHTML)
						}}
					>
						X
					</p>
					<p
						className={`${size === XLsize ? 'active' : ''}`}
						onClick={(e) => {
							setSize(e.target.innerHTML)
							setXLsize(e.target.innerHTML)
						}}
					>
						XL
					</p>
				</div>
			</div>
			<div className="material mb-3">
				<p>
					Material
					<span>
						<CgAsterisk />
					</span>
				</p>
				<div className="material-type mt-2">
					<button disabled={size === Ssize || size === Lsize}>Leather</button>
					<button
						disabled={size === XSsize || size === Msize || size === Xsize}
					>
						Strap
					</button>
				</div>
				<div className="materials"></div>
			</div>
			<div className="quantity mb-3">
				<p>Quantity:</p>
				<div className="quantity-content mt-2">
					<div className="subtract" onClick={() => setQuantity(quantity - 1)}>
						-
					</div>
					<div className="quantity">{quantity}</div>
					<div className="add" onClick={() => setQuantity(quantity + 1)}>
						+
					</div>
				</div>
			</div>
			<p className="subtotal mb-3">
				Subtotal: <span>$870.00</span>
			</p>
		</div>
	)
}

export default ProductDetailsTop
