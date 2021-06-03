import React, { useState } from 'react'
import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	BiSearch,
	FiMenu,
} from 'react-icons/all'
import './navbarright.scss'

const NavbarRight = ({ toggleCartMenu, cartItem }) => {
	const [active, setActive] = useState(false)
	return (
		<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 menu-items">
			<div className="menu-items-content">
				<div className="account">
					<p>Account</p>
					<AiOutlineUser />
				</div>
				<div
					onClick={() => {
						toggleCartMenu()
						setActive(!active)
					}}
					className="cart"
				>
					<p
						style={
							active ? { borderBottom: '1px solid black' } : { border: 'none' }
						}
						className="cart-name"
					>
						Cart
					</p>
					<div className="cart-content">
						<AiOutlineShoppingCart />
						<p>{cartItem}</p>
					</div>
				</div>
				<div className="divider" />
				<div className="navbar-last-item">
					<div className="search">
						<BiSearch />
					</div>
					<div className="menu-bar">
						<FiMenu />
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavbarRight
