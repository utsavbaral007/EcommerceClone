import React from 'react'
import './footer.scss'
import FooterTop from './Footertop/FooterTop'
import FooterMid from './FooterMiddle/FooterMiddle'
import FooterBottom from './FooterBottom/FooterBottom'

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-content">
				<FooterTop />
				<FooterMid />
				<FooterBottom />
			</div>
		</div>
	)
}

export default Footer
