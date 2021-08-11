import React from 'react'
import './slider.scss'
import SliderItem from './sliderItem/sliderItem'

type SliderItemType = typeof SliderItem

type Props = {
	children?:
		| React.ReactElement<SliderItemType>
		| React.ReactElement<SliderItemType>[]
}

function Slider(props: Props) {
	const { children } = props

	return <div className='slider'>{children}</div>
}

export default Slider
