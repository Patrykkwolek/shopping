import React from 'react'
import './leftMenu.scss'
import List from './list'

type Props = {
	title: string
	hideLeftMenu: () => void
}

function LeftMenu(props: Props) {
	const { title, hideLeftMenu } = props

	return (
		<div className='main-menu'>
			<div className='main-menu__header'> {title}</div>
			<List hideLeftMenu={hideLeftMenu} />
		</div>
	)
}

export default LeftMenu
