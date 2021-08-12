import * as _ from 'lodash'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import Dish from '../../modules/mainPage/subPages/home/dishes/dish/dishes'

import SwiperCore, { Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination])

type Props = {
	mealsIDs: string[]
}

function MealsSlider(props: Props) {
	const { mealsIDs } = props

	return (
		<Swiper spaceBetween={10} slidesPerView={3}>
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
