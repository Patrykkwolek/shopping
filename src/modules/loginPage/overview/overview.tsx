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
			<Swiper pagination>
				<SwiperSlide>
					<div className='overview__content'>
						<h2>
							{getTranslation('sliderText')}
							<br />
							{getTranslation('sliderText2nd')}
						</h2>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='overview__content'>
						<h2>Fast and reliable</h2>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='overview__content'>
						<h2>Zero waste idea</h2>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Overview
