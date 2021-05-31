import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-alice-carousel/lib/scss/alice-carousel.scss'
import "react-image-gallery/styles/scss/image-gallery.scss"
import App from './App'

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
)
