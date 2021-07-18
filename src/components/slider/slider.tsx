import React from 'react'
import './slider.scss'
import getTranslation from '../../translations'

function Slider() {
	return (
		<div className='slider'>
			<h2 className='slider-content'>
				{getTranslation('sliderText')}
				<br />
				{getTranslation('sliderText2nd')}
			</h2>
		</div>
	)
}

export default Slider
