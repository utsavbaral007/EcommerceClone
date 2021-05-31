import React from 'react'
import HomeHeroCarousel from '../../components/LandingPage/HomeHeroCarousel/HomeHeroCarousel'
import ShopCollection from '../../components/LandingPage/ShopCollection/ShopCollection'
import MensWatches from '../../components/LandingPage/MensWatches/MensWatches'
import NewReleases from '../../components/LandingPage/NewReleases/NewReleases'
import EditorsPick from '../../components/LandingPage/EditorsPick/EditorsPick'
import CustomBlock from '../../components/LandingPage/CustomBlock/CustomBlock'
import CustomerReviews from '../../components/LandingPage/CustomerReviews/CustomerReviews'
import Brands from '../../components/LandingPage/Brands/Brands'
import InstagramPosts from '../../components/LandingPage/InstagramPosts/InstagramPosts'

const LandingPage = () => {
	return (
		<div className="landing-page-container">
			<HomeHeroCarousel />
			<ShopCollection />
			<MensWatches />
			<NewReleases />
			<EditorsPick />
			<CustomBlock />
			<CustomerReviews />
			<Brands />
			<InstagramPosts />
		</div>
	)
}

export default LandingPage
