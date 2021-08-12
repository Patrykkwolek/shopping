import React from 'react'
import './home.scss'
import MealTypes from './mealTypes/mealTypes'
import MealsSlider from '../../../../components/mealsSlider/mealsSlider'
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
				<h5>{getTranslation('promoMeals')}</h5>
				<MealsSlider mealsIDs={['img4', 'img2', 'img9']} />
				<h5>{getTranslation('recommendedMeals')}</h5>
				<MealsSlider mealsIDs={['img1', 'img2', 'img5', 'img8']} />
				<h5>{getTranslation('all')}</h5>
				<Dishes />
			</div>
		</div>
	)
}

export default Home
