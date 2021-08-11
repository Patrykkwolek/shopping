import React, { useState, useCallback } from 'react'
import './mainPage.scss'
import getTranslation from '../../translations'
import { animations } from './constants'
import { Route } from 'react-router-dom'
import classNames from 'classnames'
import LeftMenu from './leftMenu/leftMenu'
import Header from './header/header'
import Home from './subPages/home/home'

function MainPage() {
	const [menusAnimation, setMenuAnimation] = useState(animations.NotSet)
	const handleOnMainMenuClick = useCallback(() => {
		setMenuAnimation(
			menusAnimation === animations.NotSet ||
				menusAnimation === animations.Rollback
				? animations.Rollout
				: animations.Rollback
		)
	}, [setMenuAnimation, menusAnimation])

	const handleOnMainMenuHide = useCallback(() => {
		setMenuAnimation(animations.Rollback)
	}, [setMenuAnimation, menusAnimation])

	return (
		<div className='main-page'>
			<LeftMenu
				title={getTranslation('mainMenu')}
				onMainMenuHide={handleOnMainMenuHide}
			/>
			<div
				className={classNames('main-page-content', {
					'main-page-content--rollout': menusAnimation === animations.Rollout,
					'main-page-content--rollback': menusAnimation === animations.Rollback,
				})}
			>
				<div className='main-page-content__container'>
					<Header
						title={getTranslation('home')}
						onMainMenuClick={handleOnMainMenuClick}
					/>
					<Route path='/main/search'>
						<Home />
					</Route>
					<Route path='/main/orders'>
						<div>Orders</div>
					</Route>
				</div>
			</div>
		</div>
	)
}

export default MainPage
