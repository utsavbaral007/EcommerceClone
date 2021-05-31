import React from 'react'
import './subbanner.scss'

const SubBanner = () => {
	return (
		<div className="sub-banner-container py-5 padding-content">
			<div className="sub-banner-content row">
				<div className="sub-banner col-lg-6 col-md-6 col-sm-12 mb-4">
					<div className="img-box">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/5_770x770_crop_center.jpg?v=1569997422"
							alt=""
						/>
					</div>
					<div className="contents">
						<p className="heading mb-3">Milance</p>
						<p className="description mb-2">
							Nam tempus turpis at metus scelerisque placerat nulla deumantos
							sollicitudin delos felis de cosmo milancelos. Pellentesque diam
							dolor an elementum et lobortis. Nuncos vestibulum interdum turpis.
						</p>
					</div>
				</div>
				<div className="sub-banner col-lg-6 col-md-6 col-sm-12 mb-4">
					<div className="img-box">
						<img
							src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/6_770x770_crop_center.jpg?v=1569997431"
							alt=""
						/>
					</div>
					<div className="contents">
						<p className="heading mb-3">Cosmopolis</p>
						<p className="description mb-2">
							Nam tempus turpis at metus scelerisque placerat nulla deumantos
							sollicitudin delos felis de cosmo milancelos. Pellentesque diam
							dolor an elementum et lobortis. Nuncos vestibulum interdum turpis.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubBanner
