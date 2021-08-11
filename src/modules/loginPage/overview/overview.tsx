import React from 'react'
import './overview.scss'
import Slider from '../../../components/slider/slider'
import SliderItem from '../../../components/slider/sliderItem/sliderItem'
import getTranslation from '../../../translations'

function Overview() {
	return (
		<div className='overview'>
			<Slider>
				<SliderItem id={1}>
					<div className='overview__content'>
						<h2>
							{getTranslation('sliderText')}
							<br />
							{getTranslation('sliderText2nd')}
						</h2>
					</div>
				</SliderItem>
			</Slider>
		</div>
	)
}

export default Overview

// {getTranslation('sliderText')}
// <br />
// {getTranslation('sliderText2nd')}
