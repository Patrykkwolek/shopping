import * as _ from 'lodash'
import React from 'react'
import Meal from '../meal/meal'
import './allMeals.scss'
import { mealsMockedData } from '../../modules/mainPage/subPages/home/mockedData'

function AllMeals() {
	return (
		<div className='meals'>
			{_.map(mealsMockedData, meal => (
				<Meal key={meal.id} {...meal} />
			))}
		</div>
	)
}

export default AllMeals
