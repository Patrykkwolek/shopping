import * as _ from 'lodash'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import Dish from '../meal/meal'

import SwiperCore, { Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination])

type Props = {
	mealsIDs: string[]
	slidesPerView: number
}

function MealsSlider(props: Props) {
	const { mealsIDs, slidesPerView } = props

	return (
		<Swiper spaceBetween={10} slidesPerView={slidesPerView}>
			{_.map(mealsIDs, mealID => (
				<SwiperSlide>
					<div className='recommended__content'>
						<Dish imgName={mealID} />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default MealsSlider
