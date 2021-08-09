import React from 'react'
import './leftMenu.scss'
import List from './list'

type Props = {
	title: string
	onMainMenuHide: () => void
}

function LeftMenu(props: Props) {
	const { title, onMainMenuHide } = props

	return (
		<div className='main-menu'>
			<div className='main-menu__header'> {title}</div>
			<List onMainMenuHide={onMainMenuHide} />
		</div>
	)
}

export default LeftMenu
