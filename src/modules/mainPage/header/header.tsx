import React from 'react'
import './header.scss'
import {
	BellIcon,
	MagnifyIcon,
	MenuIcon,
} from '../../../resources/img/svgIcons'

type Props = {
	title: string
	onMainMenuClick: () => void
}

function Header(props: Props) {
	const { title, onMainMenuClick } = props

	return (
		<div className='header'>
			<div className='header__options'>
				<button
					onClick={onMainMenuClick}
					type='button'
					className='header__icon'
				>
					<MenuIcon className='header__left-icon' />
				</button>
			</div>
			<div className='header__title'>{title}</div>
			<div className='header__options header__options--right-side'>
				<MagnifyIcon className='header__right-icon header__right-icon--magnify' />
				<BellIcon className='header__right-icon' />
			</div>
		</div>
	)
}

export default Header
