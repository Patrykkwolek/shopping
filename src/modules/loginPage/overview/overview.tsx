import React from 'react'
import './overview.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, { Pagination } from 'swiper/core'
import getTranslation from '../../../translations'

SwiperCore.use([Pagination])

function Overview() {
	return (
		<div className='overview'>
			<Swiper className='slider' pagination>
				<SwiperSlide className='slider-item'>
					<div className='overview__content'>
						<h2>
							{getTranslation('sliderText')}
							<br />
							{getTranslation('sliderText2nd')}
						</h2>
					</div>
				</SwiperSlide>
				<SwiperSlide className='slider-item'>Slide 2</SwiperSlide>
				<SwiperSlide className='slider-item'>Slide 3</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Overview
