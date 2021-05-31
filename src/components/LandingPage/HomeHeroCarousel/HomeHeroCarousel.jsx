import React from 'react'
import './homeherocarousel.scss'
import { Carousel } from 'react-bootstrap'

const HomeHeroCarousel = () => {
	const imgUrl = [
		'https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide2.jpg?v=1569932794',
		'https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide3.jpg?v=1569933096',
		'https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide1.jpg?v=1569931891',
	]

	return (
		<Carousel className = "carousel-div" fade controls={false} interval={4000}>
			<Carousel.Item>
				<img className="d-block w-100" src={imgUrl[0]} alt="First slide" />
				<Carousel.Caption>
					<h1>Cosmopolis</h1>
					<p className="mt-3 mb-3">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
						dolorum ut amet, ipsam ad doloremque.
					</p>
					<button>Shop this collection</button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgUrl[1]} alt="Second slide" />

				<Carousel.Caption>
					<h1>Melancelos</h1>
					<p className="mt-3 mb-3">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
						dolorum ut amet, ipsam ad doloremque.
					</p>
					<button>Shop this collection</button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgUrl[2]} alt="Third slide" />

				<Carousel.Caption style={{ maxWidth: '500px', margin: '0 auto' }}>
					<h1>Special offers</h1>
					<p className="mt-3 mb-3">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
						dolorum ut amet, ipsam ad doloremque.
					</p>
					<div className="time mb-4">
						<div className="days">
							<p>00</p>
							<p>Days</p>
						</div>
						<div className="hours">
							<p>00</p>
							<p>Hours</p>
						</div>
						<div className="min">
							<p>00</p>
							<p>Min</p>
						</div>
						<div className="sec">
							<p>00</p>
							<p>Sec</p>
						</div>
					</div>
					<div className="btn-group">
						<button>Shop Mens</button>
						<button>Shop Womens</button>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default HomeHeroCarousel
