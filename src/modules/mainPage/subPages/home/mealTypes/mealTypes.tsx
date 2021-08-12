import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import breakfast from '../../../../../resources/img/tmp/breakfast.png'
import dinner from '../../../../../resources/img/tmp/dinner.png'
import lunch from '../../../../../resources/img/tmp/lunch.png'

import SwiperCore, { Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination])

function MealTypes() {
	return (
		<Swiper spaceBetween={10} slidesPerView={1.1}>
			<SwiperSlide>
				<div className='categories__content'>
					<img src={breakfast} alt='' width='100%' />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='categories__content'>
					<img src={lunch} alt='' width='100%' />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='categories__content'>
					<img src={dinner} alt='' width='100%' />
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default MealTypes
