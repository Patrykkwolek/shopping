import React from 'react'
import './header.scss'
import {
	BellIcon,
	OrderIcon,
	MenuIcon,
	HomeIcon,
} from '../../../resources/img/svgIcons'
import * as routes from '../../../routes'
import LinkButton from '../../../components/linkButton/linkButton'
import { useLocation } from 'react-router-dom'

type Props = {
	title: string
	onLeftMenuToggle: () => void
}

function Header(props: Props) {
	const { title, onLeftMenuToggle } = props
	const location = useLocation()

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
				{location.pathname === routes.ordersPageUrl ? (
					<LinkButton to={routes.searchPageUrl}>
						<HomeIcon className='header__right-icon' />
					</LinkButton>
				) : (
					<LinkButton to={routes.ordersPageUrl}>
						<OrderIcon className='header__right-icon' />
					</LinkButton>
				)}
				<BellIcon className='header__right-icon' />
			</div>
		</div>
	)
}

export default Header
