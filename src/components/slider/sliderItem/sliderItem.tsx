import React, { ReactNode } from 'react'
import './sliderItem.scss'

export type SliderItemProps = {
	id: number
	children?: ReactNode
}

function SliderItem(props: SliderItemProps) {
	const { children } = props

	return <div className='slider-item'>{children}</div>
}

export default SliderItem
