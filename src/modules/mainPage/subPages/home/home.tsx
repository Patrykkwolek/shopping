import React from 'react'
import './home.scss'
import MealTypes from '../../../../components/mealTypes/mealTypes'
import MealsSlider from '../../../../components/mealsSlider/mealsSlider'
import Meals from '../../../../components/meals/meals'
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
				<MealsSlider slidesPerView={3} mealsIDs={['img4', 'img2', 'img9']} />
				<h5>{getTranslation('recommendedMeals')}</h5>
				<MealsSlider
					slidesPerView={3.2}
					mealsIDs={['img1', 'img2', 'img5', 'img8']}
				/>
				<h5>{getTranslation('mostWanted')}</h5>
				<MealsSlider slidesPerView={3} mealsIDs={['img1', 'img2', 'img3']} />
				<h5>{getTranslation('all')}</h5>
				<Meals />
			</div>
		</div>
	)
}

export default Home
