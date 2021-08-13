import React, { useCallback } from 'react'
import './meal.scss'
import type { MealType } from '../../models/meal/type'

type Props = MealType & {
	onShowDetails?: (mealID: string) => void
}

function Meal(props: Props) {
	const { id, timeToPrepare, title, previewImg, onShowDetails } = props
	const handleOnMealSelect = useCallback(() => {
		if (onShowDetails) {
			onShowDetails(id)
		}
	}, [id, onShowDetails])

	return (
		<button className='meal' onClick={handleOnMealSelect} type='button'>
			<img src={previewImg} alt='' className='' width='100%' />
			<div className='meal__name'>{title}</div>
			<div className='meal__items'>
				<span className='meal__time-item'>{timeToPrepare}</span>
				<span className='meal__price-item'>19,99 zł</span>
			</div>
		</button>
	)
}

export default Meal
