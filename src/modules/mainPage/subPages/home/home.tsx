import * as _ from 'lodash'
import React, { useState, useCallback } from 'react'
import './home.scss'
import MealTypes from '../../../../components/mealTypes/mealTypes'
import MealsSlider from '../../../../components/mealsSlider/mealsSlider'
import AllMeals from '../../../../components/allMeals/allMeals'
import Searchbar from '../../../../components/searchbar/searchbar'
import getTranslation from '../../../../translations'
import MealDetails from '../../../../components/mealDetails/mealDetails'

import { mealsMockedData } from './mockedData'
import { MealType } from '../../../../models/meal/type'

function Home() {
	const [selectedMealDetails, setSelectedMealDetails] =
		useState<MealType | null>(null)

	const handleSelectMealToPreview = useCallback(
		(mealID: string) => {
			const mealToPreview = _.find(mealsMockedData, meal => meal.id === mealID)
			if (mealToPreview) {
				setSelectedMealDetails(mealToPreview)
			}
		},
		[mealsMockedData, setSelectedMealDetails]
	)

	return (
		<div className='home'>
			<div className='categories'>
				<Searchbar
					onSearchTextChange={_text => {
						console.log(_text)
					}}
				/>
				<h5>{getTranslation('mealTypes')}</h5>
				<MealTypes />
				<h5>{getTranslation('justForYou')}</h5>
				<MealsSlider
					slidesPerView={3}
					meals={[mealsMockedData[6], mealsMockedData[8], mealsMockedData[9]]}
				/>
				<h5>{getTranslation('promoMeals')}</h5>
				<MealsSlider
					slidesPerView={3}
					meals={[mealsMockedData[3], mealsMockedData[1], mealsMockedData[8]]}
				/>
				<h5>{getTranslation('recommendedMeals')}</h5>
				<MealsSlider
					slidesPerView={3.2}
					meals={[
						mealsMockedData[0],
						mealsMockedData[1],
						mealsMockedData[4],
						mealsMockedData[7],
					]}
					onSelectMealPreview={handleSelectMealToPreview}
				/>
				<h5>{getTranslation('mostWanted')}</h5>
				<MealsSlider
					slidesPerView={3}
					meals={[mealsMockedData[0], mealsMockedData[1], mealsMockedData[2]]}
				/>
				<h5>{getTranslation('all')}</h5>
				<AllMeals />
			</div>
			{selectedMealDetails && <MealDetails {...selectedMealDetails} />}
		</div>
	)
}

export default Home
