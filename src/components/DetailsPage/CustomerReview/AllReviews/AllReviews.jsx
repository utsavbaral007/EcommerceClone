import React from 'react'
import { AiFillStar, BsFlag } from 'react-icons/all'
import { withRouter } from 'react-router-dom'
import './allreviews.scss'

const AllReviews = ({history}) => {
	return (
		<div className="all-reviews padding-content">
			<div className="write-review pb-5">
				<div className="review-count">
					<p>Based on 2 reviews</p>
					<div className="stars">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
				</div>
				<button className="write-review-btn">Write a review</button>
			</div>
			<div className="reviews py-5">
				<div className="stars mb-2">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<p className="commented-by mb-2">John Doe</p>
				<p className="commented-time text-muted mb-2">test on May 01, 2020</p>
				<p className="comment my-3">
					Nam tempus turpis at metus scelerisque placerat nulla deumantos
					sollicitudin delos felis de cosmo milancelos. Pellentesque diam dolor
					an elementum et lobortis. Nuncos vestibulum interdum turpis
				</p>
				<div className="report-inappropriate">
					<BsFlag />
					<p className="text-muted">Report as Inappropriate</p>
				</div>
			</div>
			<div className="reviews py-5">
				<div className="stars mb-2">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<p className="commented-by mb-2">John Doe</p>
				<p className="commented-time text-muted mb-2">test on May 01, 2020</p>
				<p className="comment my-3">
					Nam tempus turpis at metus scelerisque placerat nulla deumantos
					sollicitudin delos felis de cosmo milancelos. Pellentesque diam dolor
					an elementum et lobortis. Nuncos vestibulum interdum turpis
				</p>
				<div className="report-inappropriate">
					<BsFlag />
					<p className="text-muted">Report as Inappropriate</p>
				</div>
			</div>
			<div className="navigator">
				<p onClick = {() => history.push('/')} className="mx-2">Home</p>
				<span>&#8250;</span>
				<p className="mx-2">Milancelos</p>
				<span>&#8250;</span>
				<p className="mx-2">Ninterdum Pre De Condimento</p>
			</div>
		</div>
	)
}

export default withRouter(AllReviews)
