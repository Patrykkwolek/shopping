import React from 'react'
import './header.scss'
import Menu from '../../../resources/img/menu.svg'
import Bell from '../../../resources/img/bell.svg'
import Magnify from '../../../resources/img/magnify.svg'

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
					<img src={Menu} alt='' className='header__left-icon' />
				</button>
			</div>
			<div className='header__title'>{title}</div>
			<div className='header__options header__options--right-side'>
				<img
					src={Magnify}
					alt=''
					className='header__right-icon header__right-icon--magnify'
				/>
				<img src={Bell} alt='' className='header__right-icon' />
			</div>
		</div>
	)
}

export default Header
