import React from 'react'
import EditorsPickSlider from './EditorsPickSlider/EditorsPickSlider'
import './editorspick.scss'

const EditorsPick = () => {
	return (
		<div className="editors-pick-container pb-5 padding-content">
			<div className="editors-pick-content">
				<div className="heading">
					<p>Editor's Pick</p>
					<span className="text-muted">/</span>
					<p>Featured</p>
					<span className="text-muted">/</span>
					<p>Best Sellers</p>
				</div>
				<EditorsPickSlider />
			</div>
		</div>
	)
}

export default EditorsPick
