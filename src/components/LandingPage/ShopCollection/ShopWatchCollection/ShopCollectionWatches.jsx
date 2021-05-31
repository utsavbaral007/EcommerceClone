import React from 'react'
import './shopcollectionwatches.scss'
import AliceCarousel from 'react-alice-carousel'
import { watches } from './imageData'

const ShopCollectionWatches = () => {
	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 4 },
	}

	return (
		<div className="shop-collection-watches col-lg-8">
			<AliceCarousel
				mouseTracking
				infinite
				responsive={responsive}
				disableButtonsControls
			>
				{watches?.map((watch, index) => (
					<div key={index} className="watch-card">
						<img className="mb-3" src={watch.imageUrl} alt="item" />
						<p className="watch-name">{watch.product_name}</p>
						<p className="product-quantity text-muted my-3">
							{watch.product_quantity} Products
						</p>
						<button>Shop now</button>
					</div>
				))}
			</AliceCarousel>
		</div>
	)
}

export default ShopCollectionWatches
