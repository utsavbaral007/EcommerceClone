import React from 'react'
import {
	FaFacebookF,
	FaTwitter,
	FaGooglePlusG,
	FaPinterestP,
	FaInstagram,
	FaWhatsapp,
} from 'react-icons/all'
import './footercompanyinfo.scss'

const FooterCompanyInfo = () => {
	return (
		<div className="company-info col-lg-3 col-md-4 col-sm-6">
			<img
				src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/lw-logo-b.png?v=1566992556"
				alt="logo"
				className="logo"
			/>
			<p className="address my-2 text-muted">
				685 Market Street, San Francisco, CA 94105, United States
			</p>
			<div className="contactno my-2 text-muted">
				<p>+0123 456 7890</p>
			</div>
			<div className="email my-2 text-muted">
				<p>support@halothemes.com</p>
			</div>
			<div className="open-time my-2 text-muted">
				<p>M-T 8:30-2:00 pm</p>
			</div>
			<div className="open-time my-2 text-muted">
				<p> F-S 9:00-1:00 pm GMT+7</p>
			</div>
			<div className="footer-icons my-4">
				<FaFacebookF />
				<FaTwitter />
				<FaGooglePlusG />
				<FaPinterestP />
				<FaInstagram />
				<FaWhatsapp />
			</div>
		</div>
	)
}

export default FooterCompanyInfo
