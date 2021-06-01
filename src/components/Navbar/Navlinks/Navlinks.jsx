import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiChevronLeft, ImCancelCircle } from 'react-icons/all'
import NewReleaseSubLink from './NewReleaseSubLink/NewReleaseSubLink'
import MensSubLink from './MensSubLink/MensSubLink'
import AccessoriesSubLink from './AccessoriesSubLink/AccessoriesSubLink'
import JewelrySubLink from './JewelrySubLink/JewelrySubLink'
import { subLinkData } from './NewReleaseSubLink/NewReleaseSubLinkData'
import './navlinks.scss'

const Navlinks = ({ sideBarRef, handleSidebarToggle, overlayRef }) => {
	const [newReleaseSubLinkVisible, setNewReleaseSubLinkVisible] =
		useState(false)
	const [mensSubLinkVisible, setMensSubLinkVisible] = useState(false)
	const [accessoriesSubLinkVisible, setAccessoriesSubLinkVisible] =
		useState(false)
	const [jewelrySubLinkVisible, setJewelrySubLinkVisible] = useState(false)
	const [womensSubLinkVisible, setWomensSubLinkVisible] = useState(false)
	const [demoSubLinkVisible, setDemoSubLinkVisible] = useState(false)

	const newReleaseSidebar = useRef()
	const mensSidebar = useRef()
	const accessoriesSidebar = useRef()
	const jewelrySidebar = useRef()
	const womensSidebar = useRef()
	const demoSidebar = useRef()

	return (
		<>
			<div ref={overlayRef} className="overlay"></div>
			<NewReleaseSubLink
				newReleaseSubLinkVisible={newReleaseSubLinkVisible}
				newReleaseSidebar={newReleaseSidebar}
			/>

			<MensSubLink
				mensSubLinkVisible={mensSubLinkVisible}
				mensSidebar={mensSidebar}
			/>

			<AccessoriesSubLink
				accessoriesSubLinkVisible={accessoriesSubLinkVisible}
				accessoriesSidebar={accessoriesSidebar}
			/>

			<JewelrySubLink
				jewelrySubLinkVisible={jewelrySubLinkVisible}
				jewelrySidebar={jewelrySidebar}
			/>

			<div
				ref={sideBarRef}
				className="col-lg-4 col-md-4 col-sm-4 col-xs-4 navlink-container"
			>
				<div onClick={handleSidebarToggle} className="sidebar-toggler">
					<ImCancelCircle />
				</div>
				<div
					onMouseEnter={() => setNewReleaseSubLinkVisible(true)}
					onMouseLeave={() => setNewReleaseSubLinkVisible(false)}
					className="links py-1"
				>
					<Link>New releases</Link>
					<FiChevronRight
						onClick={() =>
							newReleaseSidebar.current.classList.toggle(
								'new-release-sublink-active'
							)
						}
					/>
				</div>
				<div
					onMouseEnter={() => setMensSubLinkVisible(true)}
					onMouseLeave={() => setMensSubLinkVisible(false)}
					className="links py-1"
				>
					<Link>Mens</Link>
					<FiChevronRight
						onClick={() =>
							mensSidebar.current.classList.toggle('mens-sublink-active')
						}
					/>
				</div>
				<div
					onMouseEnter={() => setWomensSubLinkVisible(true)}
					onMouseLeave={() => setWomensSubLinkVisible(false)}
					className="links py-1"
				>
					<Link>Womens</Link>
					<FiChevronRight
						onClick={() =>
							womensSidebar.current.classList.toggle('womens-link-active')
						}
					/>
					<div
						ref={womensSidebar}
						className={`${
							womensSubLinkVisible && window.innerWidth > 1200
								? 'womens-link-visible womens-link'
								: 'womens-link'
						}`}
					>
						<div className="heading mt-2 mb-2 pb-3">
							<FiChevronLeft
								onClick={() =>
									womensSidebar.current.classList.toggle('womens-link-active')
								}
								className="mx-2"
							/>
							<p className="mx-3">Womens</p>
						</div>
						{subLinkData
							?.slice(0, 1)
							.map((data) =>
								data.links?.map((link, index) => (
									<Link key={index}>{link.link}</Link>
								))
							)}
					</div>
				</div>
				<div
					onMouseEnter={() => setJewelrySubLinkVisible(true)}
					onMouseLeave={() => setJewelrySubLinkVisible(false)}
					className="links py-1"
				>
					<Link>Jewelry</Link>
					<FiChevronRight
						onClick={() =>
							jewelrySidebar.current.classList.toggle('jewelry-sublink-active')
						}
					/>
				</div>
				<div
					onMouseEnter={() => setAccessoriesSubLinkVisible(true)}
					onMouseLeave={() => setAccessoriesSubLinkVisible(false)}
					className="links py-1"
				>
					<Link>Accessories</Link>
					<FiChevronRight
						onClick={() =>
							accessoriesSidebar.current.classList.toggle(
								'accessories-sublink-active'
							)
						}
					/>
				</div>
				<div className="links py-1">
					<Link>Blog</Link>
					<FiChevronRight />
				</div>

				<div
					onMouseEnter={() => setDemoSubLinkVisible(true)}
					onMouseLeave={() => setDemoSubLinkVisible(false)}
					className="links py-1"
				>
					<Link>Demo</Link>
					<FiChevronRight
						onClick={() =>
							demoSidebar.current.classList.toggle('demo-link-active')
						}
					/>
					<div
						ref={demoSidebar}
						className={`${
							demoSubLinkVisible && window.innerWidth > 1200
								? 'demo-link-visible demo-link'
								: 'demo-link'
						}`}
					>
						<div className="heading mt-2 mb-2 pb-3">
							<FiChevronLeft
								onClick={() =>
									demoSidebar.current.classList.toggle('demo-link-active')
								}
								className="mx-2"
							/>
							<p className="mx-3">Demo</p>
						</div>
						{subLinkData
							?.slice(0, 1)
							.map((data) =>
								data.links?.map((link, index) => (
									<Link key={index}>{link.link}</Link>
								))
							)}
					</div>
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
