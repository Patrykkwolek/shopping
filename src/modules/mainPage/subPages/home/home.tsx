import React from 'react'
import './home.scss'
import MealTypes from './mealTypes/mealTypes'
import getTranslation from '../../../../translations'

function Home() {
	return (
		<div className='home'>
			<div className='categories'>
				<h5>{getTranslation('mealTypes')}</h5>
				<MealTypes />
				<h5>{getTranslation('dishes')}</h5>
			</div>
		</div>
	)
}

export default Home
