import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/all'
import { subLinkData } from '../NewReleaseSubLink/NewReleaseSubLinkData'
import { HiChevronRight, HiChevronLeft } from 'react-icons/all'
import './menssublink.scss'

const MensSubLink = ({ mensSidebar, mensSubLinkVisible }) => {
	return (
		<div
			ref={mensSidebar}
			className={`${
				mensSubLinkVisible && window.innerWidth > 1200
					? 'sublinks-visible mens-sublink w-100'
					: 'mens-sublink w-100`'
			}`}
		>
			<div className="main-heading py-3 mb-3">
				<HiChevronLeft
					onClick={() =>
						mensSidebar.current.classList.toggle('mens-sublink-active')
					}
				/>{' '}
				<p className="mx-4">Mens</p>
			</div>
			<div className="mens-sublink-contents row px-5">
				<div className="sublink-division col-lg-7">
					<div className="links-content links mb-4">
						{subLinkData?.map((data, index) => (
							<div key={index} className="links mb-3">
								<div className="heading mb-2">
									<p>{data.heading}</p> <HiChevronRight />
								</div>
								{data.links?.map((link, index) => (
									<Link key={index} className="mb-2">
										{link.link}
									</Link>
								))}
							</div>
						))}
					</div>
				</div>
				<div className="sublink-division-right col-lg-5">
					<div className="sublink-division-card">
						<div className="card-right mx-2 mb-4"></div>
					</div>
				</div>
			</div>
			<p className="free-shipping-text">
				FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASES*
			</p>
		</div>
	)
}

export default MensSubLink
