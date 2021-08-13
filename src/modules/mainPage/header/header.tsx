import React from 'react'
import './header.scss'
import { BellIcon, OrderIcon, MenuIcon } from '../../../resources/img/svgIcons'

type Props = {
	title: string
	onLeftMenuToggle: () => void
}

function Header(props: Props) {
	const { title, onLeftMenuToggle } = props

	return (
		<div className='header'>
			<div className='header__options'>
				<button
					onClick={onLeftMenuToggle}
					type='button'
					className='header__icon'
				>
					<MenuIcon className='header__left-icon' />
				</button>
			</div>
			<div className='header__title'>{title}</div>
			<div className='header__options header__options--right'>
				<OrderIcon className='header__right-icon' />
				<BellIcon className='header__right-icon' />
			</div>
		</div>
	)
}

export default Header
