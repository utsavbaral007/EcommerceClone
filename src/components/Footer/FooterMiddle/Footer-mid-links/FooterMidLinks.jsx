import React from 'react'
import { Link } from 'react-router-dom'
import './footermidlinks.scss'

const FooterMidLinks = () => {
	return (
		<>
			<div className="footer-links col-lg-2 col-md-4 col-sm-6">
				<p className="heading">Shop</p>
				<Link className="text-muted my-2">New In</Link>
				<Link className="text-muted my-2">Mens</Link>
				<Link className="text-muted my-2">Womens</Link>
				<Link className="text-muted my-2">Jewelry</Link>
				<Link className="text-muted my-2">Accessories</Link>
				<Link className="text-muted my-2">Brands</Link>
				<Link className="text-muted my-2">Lookbook</Link>
			</div>
			<div className="footer-links col-lg-2 col-md-4 col-sm-6">
				<p className="heading">Information</p>
				<Link className="text-muted my-2">About</Link>
				<Link className="text-muted my-2">Customer Service</Link>
				<Link className="text-muted my-2">Reward Program</Link>
				<Link className="text-muted my-2">Reward Program</Link>
				<Link className="text-muted my-2">Privacy Policy</Link>
				<Link className="text-muted my-2">Terms & Conditons</Link>
				<Link className="text-muted my-2">Blog</Link>
			</div>
			<div className="footer-links col-lg-2 col-md-4 col-sm-6">
				<p className="heading">Customer Service</p>
				<Link className="text-muted my-2">Search Terms</Link>
				<Link className="text-muted my-2">Advanced Search</Link>
				<Link className="text-muted my-2">Orders and Returns</Link>
				<Link className="text-muted my-2">Contact Us</Link>
				<Link className="text-muted my-2">Theme FAQs</Link>
				<Link className="text-muted my-2">Consultant</Link>
				<Link className="text-muted my-2">Store Locations</Link>
			</div>
		</>
	)
}

export default FooterMidLinks
