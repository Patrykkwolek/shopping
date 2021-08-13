import React from 'react'
import './mealDetails.scss'
import type { MealType } from '../../models/meal/type'

type Props = MealType & {}

function MealDetails(props: Props) {
	const { title, description } = props

	return (
		<div className='meal-details'>
			<h2>{title}</h2>
			<h5>{description}</h5>
		</div>
	)
}

export default MealDetails
