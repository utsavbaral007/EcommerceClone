import React from 'react'
import { Link } from 'react-router-dom'
import { subLinkData } from '../NewReleaseSubLink/NewReleaseSubLinkData'
import { HiChevronRight, HiChevronLeft } from 'react-icons/all'
import './jewelrysublink.scss'

const JewelrySubLink = ({ jewelrySidebar, jewelrySubLinkVisible }) => {
	return (
		<div
			ref={jewelrySidebar}
			className={`${
				jewelrySubLinkVisible && window.innerWidth > 1200
					? 'sublinks-visible jewelry-sublink w-100'
					: 'jewelry-sublink w-100`'
			}`}
		>
			<div className="main-heading py-3 mb-3">
				<HiChevronLeft
					onClick={() =>
						jewelrySidebar.current.classList.toggle('jewelry-sublink-active')
					}
				/>{' '}
				<p className="mx-4">Jewelry</p>
			</div>
			<div className="jewelry-sublink-contents row px-5">
				<div className="sublink-division col-lg-12">
					<div className="links-content links mb-4">
						{subLinkData?.slice(0, 5).map((data, index) => (
							<div key={index} className="links mb-3">
								<div className="heading mb-2">
									<p>{data.heading}</p> <HiChevronRight />
								</div>
								<img className="mb-2" src={data.imageUrl} alt="" />
								{data.links?.map((link, index) => (
									<Link key={index} className="mb-2">
										{link.link}
									</Link>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default JewelrySubLink
