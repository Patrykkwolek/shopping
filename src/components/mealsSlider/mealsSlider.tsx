import * as _ from 'lodash'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import Meal from '../meal/meal'
import type { MealType } from '../../models/meal/type'

import SwiperCore, { Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination])

type Props = {
	meals: MealType[]
	slidesPerView: number
	onSelectMealPreview?: (mealID: string) => void
}

function MealsSlider(props: Props) {
	const { meals, slidesPerView, onSelectMealPreview } = props

	return (
		<Swiper spaceBetween={10} slidesPerView={slidesPerView}>
			{_.map(meals, meal => (
				<SwiperSlide key={`${SwiperSlide} - ${meal.id}`}>
					<div className='recommended__content'>
						<Meal {...meal} onShowDetails={onSelectMealPreview} />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default MealsSlider
