import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import Dish from '../dishes/dish/dishes'

import SwiperCore, { Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination])

function RecommendedMeals() {
	return (
		<Swiper spaceBetween={10} slidesPerView={3}>
			<SwiperSlide>
				<div className='recommended__content'>
					<Dish imgName='img2' />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='recommended__content'>
					<Dish imgName='img5' />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='recommended__content'>
					<Dish imgName='img8' />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='recommended__content'>
					<Dish imgName='img1' />
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default RecommendedMeals
