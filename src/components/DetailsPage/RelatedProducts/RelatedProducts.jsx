import React, { useState } from 'react'
import EditorsPickSlider from '../../../components/LandingPage/EditorsPick/EditorsPickSlider/EditorsPickSlider'
import './realtedproducts.scss'

const RelatedProducts = () => {
	const [toggle, setToggle] = useState(true)
	return (
		<div className="realted-products-container pt-3 pb-5 padding-content">
			<div className="related-products-content">
				<div className="toggle-buttons mb-4">
					<p
						onClick={() => setToggle(true)}
						className={`${toggle ? 'active' : ''} mx-3 my-1`}
					>
						Related products
					</p>
					<p className="text-muted">/</p>
					<p
						onClick={() => setToggle(false)}
						className={`${!toggle ? 'active' : ''} mx-3 my-1`}
					>
						Recently viewed
					</p>
				</div>
				{toggle ? <></> : <></>}
				{!toggle ? <EditorsPickSlider /> : <></>}
			</div>
		</div>
	)
}

export default RelatedProducts
