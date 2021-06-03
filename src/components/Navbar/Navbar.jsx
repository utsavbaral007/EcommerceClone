import React, { useRef } from 'react'
import './navbar.scss'
import Navlinks from './Navlinks/Navlinks'
import NavbarLogo from './Navbar-logo/NavbarLogo'
import CartMenu from './CartMenu/CartMenu'
import NavbarRight from './Navbar-right-menu/NavbarRight'
import { BiSearch, FiMenu } from 'react-icons/all'

const Navbar = ({ scrollFixed }) => {
	const sideBarRef = useRef()
	const overlayRef = useRef()
	const cartMenuRef = useRef()

	const toggleCartMenu = () => {
		cartMenuRef.current.classList.toggle('toggle-cart-menu')
	}

	const handleSidebarToggle = () => {
		sideBarRef.current.classList.toggle('toggleSidebar')
		overlayRef.current.classList.toggle('overlay-toggle')
		document.getElementsByTagName('html')[0].classList.toggle('no-scroll')
	}

	return (
		<div className="navbar-container">
			<div
				className={`${
					scrollFixed < -5 ? 'scrollShipping' : ''
				} text-white free-shipping`}
			>
				<p>Free shipping on all orders</p>
			</div>
			<div
				className={`row align-items-center w-100 px-4 py-3 ${
					scrollFixed < -5 ? 'navbar-content scrollPosition' : 'navbar-content'
				}`}
			>
				<div className="navbar-left-item d-none col-md-4 col-sm-4 col-xs-4">
					<div className="menu-bar">
						<FiMenu onClick={handleSidebarToggle} />
					</div>
					<div className="search">
						<BiSearch />
					</div>
				</div>
				<NavbarLogo />
				<Navlinks
					sideBarRef={sideBarRef}
					overlayRef={overlayRef}
					handleSidebarToggle={handleSidebarToggle}
					scrollFixed={scrollFixed}
				/>
				<NavbarRight
					scrollFixed={scrollFixed}
					toggleCartMenu={toggleCartMenu}
				/>
			</div>
			<CartMenu cartMenuRef={cartMenuRef} toggleCartMenu={toggleCartMenu} />
		</div>
	)
}

export default Navbar
