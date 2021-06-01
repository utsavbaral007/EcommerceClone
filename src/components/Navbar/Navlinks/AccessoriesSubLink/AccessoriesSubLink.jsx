import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/all'
import { subLinkData } from '../NewReleaseSubLink/NewReleaseSubLinkData'
import { HiChevronRight, HiChevronLeft } from 'react-icons/all'
import './accessoriessublink.scss'

const AccessoriesSubLink = ({
	accessoriesSidebar,
	accessoriesSubLinkVisible,
}) => {
	return (
		<div
			ref={accessoriesSidebar}
			className={`${
				accessoriesSubLinkVisible && window.innerWidth > 1200
					? 'sublinks-visible accessories-sublink w-100'
					: 'accessories-sublink w-100`'
			}`}
		>
			<div className="main-heading py-3 mb-3">
				<HiChevronLeft
					onClick={() =>
						accessoriesSidebar.current.classList.toggle(
							'accessories-sublink-active'
						)
					}
				/>{' '}
				<p className="mx-4">Accessories</p>
			</div>
			<div className="accessories-sublink-contents row px-5">
				<div className="sublink-division col-lg-7">
					<div className="links-content links mb-4">
						{subLinkData?.slice(0, 3).map((data, index) => (
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
						<div className="card-left">
							<img
								src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/1_1024x.jpg?v=1569996689"
								alt=""
							/>
						</div>
						<div className="card-right">
							<img
								src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/3_1024x.jpg?v=1569996580"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AccessoriesSubLink
