import React from 'react'
import {
	IoAirplaneOutline,
	IoIosRefresh,
	BsAward,
	SiAdguard,
} from 'react-icons/all'
import './footertop.scss'

const FooterTop = () => {
	return (
		<div className="row footer-top">
			<div className="col-lg-3 col-md-6 footer-top-info py-4">
				<IoAirplaneOutline />
				<p>Free shipping worldwide</p>
			</div>
			<div className="col-lg-3 col-md-6 footer-top-info py-4">
				<IoIosRefresh />
				<p>Free in-store returns</p>
			</div>
			<div className="col-lg-3 col-md-6 footer-top-info py-4">
				<BsAward />
				<p>Genuine product guarantee</p>
			</div>
			<div className="col-lg-3 col-md-6 footer-top-info py-4">
				<SiAdguard />
				<p>Secure shopping guarantee</p>
			</div>
		</div>
	)
}

export default FooterTop
