import React from 'react'
import './mainMenu.scss'

type Props = {
	title: string
}

function MainMenu(props: Props) {
	const { title } = props

	return (
		<div className='main-menu'>
			<div className='main-menu__header'> {title}</div>
		</div>
	)
}

export default MainMenu
