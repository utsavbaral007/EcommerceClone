import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/all'
import { subLinkData } from './NewReleaseSubLinkData'
import { HiChevronRight, HiChevronLeft } from 'react-icons/all'
import './newreleasesublink.scss'

const NewReleaseSubLink = ({ newReleaseSubLinkVisible, newReleaseSidebar }) => {
	return (
		<div
			ref={newReleaseSidebar}
			className={`${
				newReleaseSubLinkVisible && window.innerWidth > 1200
					? 'sublinks-visible new-release-sublink w-100'
					: 'new-release-sublink w-100`'
			}`}
		>
			<div className="main-heading py-3 mb-3">
				<HiChevronLeft
					onClick={() =>
						newReleaseSidebar.current.classList.toggle(
							'new-release-sublink-active'
						)
					}
				/>{' '}
				<p className="mx-4">New Releases</p>
			</div>
			<div className="new-release-sublink-contents row px-5">
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
						<div className="card-left mx-4">
							<div className="image mb-3">
								<img
									src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
									alt=""
								/>
								<div className="hover-img" />
								<div className="new">
									<p>New</p>
								</div>
								<div className="online-only ">Online Only</div>
							</div>
							<p className="brand-name text-muted mb-2">Mango</p>
							<p className="watch-name mb-2">
								Ampus Cosmo De Milancelos Scelerisque
							</p>
							<div className="ratings mb-2">
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
							</div>
							<p className="price mb-2">$500.00</p>
							<button>Select Options</button>
						</div>
						<div className="card-right"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewReleaseSubLink
