import React from 'react'
import FooterCompanyInfo from './Footer-mid-company-info/FooterCompanyInfo'
import FooterMidLinks from './Footer-mid-links/FooterMidLinks'
import FooterNewsletter from './FooterNewsletter/FooterNewsletter'

import './footermid.scss'

const FooterMiddle = () => {
	return (
		<div className="footer-middle py-5 padding-content">
			<div className="footer-middle-content row">
				<FooterCompanyInfo />
				<FooterMidLinks />
				<FooterNewsletter />
			</div>
		</div>
	)
}

export default FooterMiddle
