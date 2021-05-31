import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import './menswatches.scss'

const MensWatches = () => {
	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 3 },
	}
	return (
		<div className="mens-watches-container py-5 padding-content">
			<div className="mens-watches-content">
				<AliceCarousel
					mouseTracking
					infinite
					responsive={responsive}
					animationDuration={1500}
					disableButtonsControls
				>
					<div className="main-div1">
						<div className="child-div1 mb-4">
							<p className="title">Milancelos</p>
							<p className="description my-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
								sequi, reprehenderit voluptatem quo reiciendis quas.
							</p>
							<p className="learn-more">Learn more</p>
						</div>
						<div className="child-div2">
							<p className="heading">Gift Packages</p>
							<div className="bg-image" />
							<div className="opacity-slide" />
						</div>
					</div>

					<div className="main-div2">
						<div className="child-div1 mb-4">
							<p className="heading">New Releases</p>
							<div className="bg-image" />
							<div className="opacity-slide" />
						</div>
						<div className="child-div2">
							<div className="bg-image" />
							<div className="opacity-slide" />
							<p className="title">Men</p>
							<p className="description my-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
								sequi, reprehenderit voluptatem quo reiciendis quas.
							</p>
							<p className="learn-more">Learn more</p>
						</div>
					</div>

					<div className="main-div3">
						<div className="child-div1 mb-4">
							<p className="heading">Best Sellers</p>
							<div className="bg-image" />
							<div className="opacity-slide" />
						</div>
						<div className="child-div2">
							<p className="title">Loremous</p>
							<p className="description my-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
								sequi, reprehenderit voluptatem quo reiciendis quas.
							</p>
							<p className="learn-more">Learn more</p>
						</div>
					</div>

					<div className="main-div4">
						<div className="child-div1 mb-4">
							<p className="title">Loremous</p>
							<p className="description my-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
								sequi, reprehenderit voluptatem quo reiciendis quas.
							</p>
							<p className="learn-more">Learn more</p>
						</div>
						<div className="child-div2">
							<p className="heading">Best Sellers</p>
							<div className="bg-image" />
							<div className="opacity-slide" />
						</div>
					</div>
				</AliceCarousel>
			</div>
		</div>
	)
}

export default MensWatches
