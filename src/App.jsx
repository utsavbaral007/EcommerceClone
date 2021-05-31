import { useEffect, useState } from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LandingPage from './pages/LandingPage/LandingPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
	const [scrollFixed, setScrollFixed] = useState(0)

	const changeNavPosition = () => {
		const scrollPos = document.body.getBoundingClientRect().top
		setScrollFixed(scrollPos)
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNavPosition)
	}, [scrollFixed])

	return (
		<div className="App">
			<Navbar scrollFixed={scrollFixed} />
			<ScrollToTop scrollFixed={scrollFixed} />
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route
					exact
					path="/details"
					render={() => <DetailsPage scrollFixed={scrollFixed} />}
				/>
			</Switch>
			<Footer />
		</div>
	)
}

export default App
