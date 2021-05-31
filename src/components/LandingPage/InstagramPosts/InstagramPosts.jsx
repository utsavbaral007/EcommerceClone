import React from 'react'
import { FaPlus } from 'react-icons/all'
import './instagramposts.scss'

const InstagramPosts = () => {
	return (
		<div className="insta-post-container py-5 padding-content">
			<p className="heading text-center">#luxw on instagram</p>
			<p className="description text-muted my-3 text-center">
				Pellentesque diam dolor an melementum et lobortis at mollis de
				comopolitanos
			</p>
			<div className="insta-post-content row">
				<div className="image col-lg-3 col-md-4 col-sm-6 my-3">
					<div className="hover-slider" />
					<img
						src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/1_d17e498d-55c3-4aa3-aea5-f55258dd7b18_640x.jpg?v=1590981455"
						alt=""
					/>
				</div>
				<div className="image col-lg-3 col-md-4 col-sm-6 my-3">
					<div className="hover-slider" />
					<img
						src="https:////cdn.shopify.com/s/files/1/0264/5000/1980/files/2_cd4de727-3747-4cd1-8181-ddcc28726802_640x.jpg?v=1590981472"
						alt=""
					/>
				</div>
				<div className="image col-lg-3 col-md-4 col-sm-6 my-3">
					<div className="hover-slider" />
					<img
						src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/3_699a6ea4-44c4-4a99-b6b6-4e3a6762c50a_640x.jpg?v=1590981487"
						alt=""
					/>
				</div>
				<div className="image col-lg-3 col-md-4 col-sm-6 my-3">
					<div className="hover-slider" />
					<img
						src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/4_3054a053-6fe6-4dba-bcdc-3a2ee6d12a3b_640x.jpg?v=1590981500"
						alt=""
					/>
				</div>
				<div className="image col-lg-3 col-md-4 col-sm-6 my-3"></div>
				<div className="image col-lg-3 col-md-4 col-sm-6 my-3"></div>
			</div>
			<div className="show-more-btn text-center my-4">
				<FaPlus />
			</div>
		</div>
	)
}

export default InstagramPosts
