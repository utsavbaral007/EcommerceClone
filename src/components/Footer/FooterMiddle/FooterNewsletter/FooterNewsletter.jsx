import React from 'react'
import './footernewsletter.scss'

const FooterNewsletter = () => {
	return (
		<div className="newsletter-content col-lg-3 col-md-4 col-sm-6">
			<p className="heading">Sign up for newsletter</p>
			<p className="details text-muted my-3">
				Receive our latest updates about our products and promotions.
			</p>
			<div className="form-demo">
				<p>Email Address</p>
				<p>SUBMIT</p>
			</div>
		</div>
	)
}

export default FooterNewsletter
