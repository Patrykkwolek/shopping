import React from 'react'
import './home.scss'
import MealTypes from './mealTypes/mealTypes'
import RecommendedMeals from './recommendedMeals/recommendedMeals'
import Dishes from './dishes/dishes'
import Searchbar from '../../../../components/searchbar/searchbar'
import getTranslation from '../../../../translations'

function Home() {
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
				<h5>{getTranslation('recommendedMeals')}</h5>
				<RecommendedMeals />
				<h5>{getTranslation('dishes')}</h5>
				<Dishes />
			</div>
		</div>
	)
}

export default Home
