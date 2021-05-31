import React from 'react'
import './shopcollection.scss'
import ShopCollectionDescription from './ShopCollectionDescription/ShopCollectionDescription'
import ShopCollectionWatches from './ShopWatchCollection/ShopCollectionWatches'

const ShopCollection = () => {
	return (
		<div className="shop-collection-container padding-content">
			<div className="shop-collection-content row">
				<ShopCollectionDescription />
				<ShopCollectionWatches />
			</div>
		</div>
	)
}

export default ShopCollection
