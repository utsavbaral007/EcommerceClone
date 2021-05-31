import React from 'react'
import './footerbottom.scss'
import Visa from '../../../assets/visacard.png'
import MasterCard from '../../../assets/mastercard.png'
import AmericanExpress from '../../../assets/americanexpress.png'
import Discover from '../../../assets/discover.png'
import PayPal from '../../../assets/paypal.png'
import WesternUnion from '../../../assets/westernunion.png'

const FooterBottom = () => {
	return (
		<div className="footer-bottom-content py-3 padding-content row">
			<div className="footer-bottom-left col-lg-6">
				<p className="text-muted my-2">
					© 2019 LUXWatches Demo. All rights reserved. Powered by Shopify.
				</p>
				<p className="text-muted my-2">Shopify Themes by HaloThemes.com</p>
			</div>
			<div className="footer-bottom-right col-lg-6">
				<img src={Visa} alt="card" />
				<img src={MasterCard} alt="card" />
				<img src={AmericanExpress} alt="card" />
				<img src={Discover} alt="card" />
				<img src={PayPal} alt="card" />
				<img src={WesternUnion} alt="card" />
			</div>
		</div>
	)
}

export default FooterBottom
