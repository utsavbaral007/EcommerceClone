import React from 'react'
import { withRouter } from 'react-router-dom'
import './navbarlogo.scss'

const NavbarLogo = ({ history }) => {
	return (
		<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 logo">
			<img
				onClick={() => history.push('/')}
				src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/lw-logo-b.png?v=1566992556"
				alt="logo"
			/>
		</div>
	)
}

export default withRouter(NavbarLogo)
