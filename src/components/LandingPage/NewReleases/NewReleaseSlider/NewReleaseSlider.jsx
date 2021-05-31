import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { AiFillStar, AiOutlineHeart, AiOutlineEye } from 'react-icons/all'
import './newreleaseslider.scss'

const NewReleaseSlider = () => {
	const responsive = {
		0: { items: 1 },
		568: { items: 3 },
		1024: { items: 6 },
	}
	return (
		<div className="new-release-slider mt-4">
			<AliceCarousel
				mouseTracking
				infinite
				responsive={responsive}
				animationDuration={1500}
				disableButtonsControls
			>
				<div className="new-release-card">
					<div className="image mb-3">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
							alt=""
						/>
						<div className="hover-img" />
						<div className="icons">
							<AiOutlineHeart />
							<AiOutlineEye />
						</div>
						<div className="new">
							<p>New</p>
						</div>
						<div className="online-only ">Online Only</div>
						<button>Add to cart</button>
					</div>
					<p className="brand-name text-muted mb-2">Mango</p>
					<p className="watch-name mb-2">
						Ampus Cosmo De Milancelos Scelerisque
					</p>
					<div className="ratings mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="price mb-2">$500.00</p>
					<div className="other-watches"></div>
				</div>

				<div className="new-release-card">
					<div className="image mb-3">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/14_300x.jpg?v=1569990905"
							alt=""
						/>
						<div className="hover-img" />
						<div className="icons">
							<AiOutlineHeart />
							<AiOutlineEye />
						</div>
						<div className="new">
							<p>New</p>
						</div>
						<div className="online-only d-none">Online Only</div>
						<button>Select options</button>
					</div>
					<p className="brand-name text-muted mb-2">Paul Smith</p>
					<p className="watch-name mb-2">Metropolis Daciniad Darturien</p>
					<div className="ratings mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="price mb-2" style={{ color: 'red' }}>
						<span className="text-muted">$800.00</span> $500.00
					</p>
					<div className="other-watches">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/14_300x.jpg?v=1569990905"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_300x.jpg?v=1569991091"
							alt="img"
						/>
					</div>
				</div>

				<div className="new-release-card">
					<div className="image mb-3">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_300x.jpg?v=1569991091"
							alt=""
						/>
						<div className="hover-img" />
						<div className="icons">
							<AiOutlineHeart />
							<AiOutlineEye />
						</div>
						<div className="new">
							<p>New</p>
						</div>
						<div className="sale">
							<p>Sale</p>
						</div>
						<div className="online-only">Online Only</div>
						<button>Add to cart</button>
					</div>
					<p className="brand-name text-muted mb-2">Sodling</p>
					<p className="watch-name mb-2">
						Ampus Cosmo De Milancelos Scelerisque
					</p>
					<div className="ratings mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="price mb-2">$500.00</p>
					<div className="other-watches">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/14_300x.jpg?v=1569990905"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_300x.jpg?v=1569991091"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/11_20240be1-0251-4292-952e-bc37c2b4f19a_300x.jpg?v=1569991037"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/03_4def74f5-9dec-4a2a-b372-521fc44042a9_300x.jpg?v=1569989653"
							alt="img"
						/>
						<p>+2</p>
					</div>
				</div>

				<div className="new-release-card">
					<div className="image mb-3">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/11_20240be1-0251-4292-952e-bc37c2b4f19a_300x.jpg?v=1569991037"
							alt=""
						/>
						<div className="hover-img" />
						<div className="icons">
							<AiOutlineHeart />
							<AiOutlineEye />
						</div>
						<div className="new d-none">
							<p>New</p>
						</div>
						<div className="online-only d-none">Online Only</div>
						<button>Add to cart</button>
						<div className="timer">
							<div className="time">
								<p>00</p>
								<p>Days</p>
							</div>
							<div className="time">
								<p>00</p>
								<p>Hours</p>
							</div>
							<div className="time">
								<p>00</p>
								<p>Mins</p>
							</div>
							<div className="time">
								<p>00</p>
								<p>Secs</p>
							</div>
						</div>
					</div>
					<p className="brand-name text-muted mb-2">Anna</p>
					<p className="watch-name mb-2">
						Ampus Cosmo De Milancelos Scelerisque
					</p>
					<div className="ratings mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="price mb-2">$500.00</p>
					<div className="other-watches">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/14_300x.jpg?v=1569990905"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_300x.jpg?v=1569991091"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/11_20240be1-0251-4292-952e-bc37c2b4f19a_300x.jpg?v=1569991037"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/03_4def74f5-9dec-4a2a-b372-521fc44042a9_300x.jpg?v=1569989653"
							alt="img"
						/>
						<p>+2</p>
					</div>
				</div>
				<div className="new-release-card">
					<div className="image mb-3">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/03_4def74f5-9dec-4a2a-b372-521fc44042a9_300x.jpg?v=1569989653"
							alt=""
						/>
						<div className="hover-img" />
						<div className="icons">
							<AiOutlineHeart />
							<AiOutlineEye />
						</div>
						<div className="new">
							<p>New</p>
						</div>
						<div className="online-only">Online Only</div>
						<button>Add to cart</button>
					</div>
					<p className="brand-name text-muted mb-2">Modern Amusement</p>
					<p className="watch-name mb-2">
						Ampus Cosmo De Milancelos Scelerisque
					</p>
					<div className="ratings mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="price mb-2" style={{ color: 'red' }}>
						<span className = "text-muted">$1,000</span> $500.00
					</p>
					<div className="other-watches">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/14_300x.jpg?v=1569990905"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_300x.jpg?v=1569991091"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/11_20240be1-0251-4292-952e-bc37c2b4f19a_300x.jpg?v=1569991037"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/03_4def74f5-9dec-4a2a-b372-521fc44042a9_300x.jpg?v=1569989653"
							alt="img"
						/>
						<p>+2</p>
					</div>
				</div>
				<div className="new-release-card">
					<div className="image mb-3">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/05_b9bf5654-af93-41bc-a214-158ed555e76f_300x.jpg?v=1569989765"
							alt=""
						/>
						<div className="hover-img" />
						<div className="icons">
							<AiOutlineHeart />
							<AiOutlineEye />
						</div>
						<div className="new">
							<p>New</p>
						</div>
						<div className="online-only">Online Only</div>
						<button>Add to cart</button>
					</div>
					<p className="brand-name text-muted mb-2">Coco Lee</p>
					<p className="watch-name mb-2">
						Ampus Cosmo De Milancelos Scelerisque
					</p>
					<div className="ratings mb-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<p className="price mb-2">$500.00</p>
					<div className="other-watches">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/14_300x.jpg?v=1569990905"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/17_300x.jpg?v=1569991091"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/11_20240be1-0251-4292-952e-bc37c2b4f19a_300x.jpg?v=1569991037"
							alt="img"
						/>
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/03_4def74f5-9dec-4a2a-b372-521fc44042a9_300x.jpg?v=1569989653"
							alt="img"
						/>
						<p>+2</p>
					</div>
				</div>
			</AliceCarousel>
		</div>
	)
}

export default NewReleaseSlider
