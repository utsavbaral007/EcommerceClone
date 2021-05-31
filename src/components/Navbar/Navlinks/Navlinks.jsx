import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight, ImCancelCircle } from 'react-icons/all'
import './navlinks.scss'

const Navlinks = ({ sideBarRef, handleSidebarToggle, overlayRef }) => {
	return (
		<>
			<div ref={overlayRef} className="overlay"></div>
			<div
				ref={sideBarRef}
				className="col-lg-4 col-md-4 col-sm-4 col-xs-4 navlink-container"
			>
				<div onClick={handleSidebarToggle} className="sidebar-toggler">
					<ImCancelCircle />
				</div>
				<div className="links py-1">
					<Link>New releases</Link>
					<FiChevronRight />
				</div>
				<div className="links py-1">
					<Link>Mens</Link>
					<FiChevronRight />
				</div>
				<div className="links py-1">
					<Link>Womens</Link>
					<FiChevronRight />
				</div>
				<div className="links py-1">
					<Link>Jewelry</Link>
					<FiChevronRight />
				</div>
				<div className="links py-1">
					<Link>Accessories</Link>
					<FiChevronRight />
				</div>
				<div className="links py-1">
					<Link>Blog</Link>
					<FiChevronRight />
				</div>
				<div className="links py-1">
					<Link>Demo</Link>
					<FiChevronRight />
				</div>
				<div className="sidebar-mid mt-3 pb-3">
					<Link>Login</Link>
					<Link>Create Account</Link>
					<Link>My Wishlists</Link>
					<Link>Shipping and Returns</Link>
					<Link>Rewards Program</Link>
				</div>
				<div className="sidebar-lang mt-4">
					<p className="heading mb-1">Language</p>
					<div className="lang-content">
						<div className="language my-1">
							<img
								src="https://img.icons8.com/cute-clipart/64/000000/germany.png"
								alt=""
							/>
							<p>DE</p>
						</div>
						<div className="language my-1">
							<img
								src="https://img.icons8.com/color/48/000000/england.png"
								alt=""
							/>
							<p>EN</p>
						</div>
					</div>
				</div>
				<div className="currency mt-4">
					<p className="heading mb-1">Currency</p>
					<div className="curr-content">
						<div className="curr my-1">
							<img
								src="https://img.icons8.com/cute-clipart/64/000000/usa.png"
								alt=""
							/>
							<p>USD</p>
						</div>
						<div className="curr my-1">
							<img
								src="https://img.icons8.com/office/64/000000/flag-of-europe.png"
								alt=""
							/>
							<p>EUR</p>
						</div>
						<div className="curr my-1">
							<img
								src="https://img.icons8.com/color/48/000000/england.png"
								alt=""
							/>
							<p>GBP</p>
						</div>
						<div className="curr my-1">
							<img
								src="https://img.icons8.com/officel/16/000000/switzerland.png"
								alt=""
							/>
							<p>SWI</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navlinks
