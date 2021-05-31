import React from 'react'
import { FaChevronUp } from 'react-icons/all'
import './scrolltotop.scss'

const ScrollToTop = ({ scrollFixed }) => {
	const scrollTop = () => {
		window.scrollTo(0, 0)
	}
	return (
		<div
			className={`${
				scrollFixed < -500
					? 'scroll-to-top-container show-scroll-to-top'
					: 'scroll-to-top-container'
			}`}
			onClick={scrollTop}
		>
			<div className="scroll-to-top-content">
				<FaChevronUp />
			</div>
		</div>
	)
}

export default ScrollToTop
