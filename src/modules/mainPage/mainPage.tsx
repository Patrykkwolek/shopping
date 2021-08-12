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

	const [isLeftMenuVisible, setIsLeftMenuVisible] = useState(false)
	const setIsLeftMenuVisibleWithDelay = useCallback(
		isMenuVisible => {
			setTimeout(() => {
				setIsLeftMenuVisible(isMenuVisible)
			}, 1000)
		},
		[setIsLeftMenuVisible]
	)

	const handleOnLeftMenuHide = useCallback(() => {
		setMenuAnimation(animations.Rollback)
		setIsLeftMenuVisibleWithDelay(false)
	}, [setMenuAnimation, setIsLeftMenuVisibleWithDelay])

	const handleOnLeftMenuShow = useCallback(() => {
		setMenuAnimation(animations.Rollout)
		setIsLeftMenuVisibleWithDelay(true)
	}, [setMenuAnimation, setIsLeftMenuVisibleWithDelay])

	const handleOnLeftMenuToggle = useCallback(() => {
		if (
			menusAnimation === animations.NotSet ||
			menusAnimation === animations.Rollback
		) {
			handleOnLeftMenuShow()
		} else {
			handleOnLeftMenuHide()
		}
	}, [setMenuAnimation, menusAnimation])

	const handleOnPageClick = useCallback(
		(event: React.MouseEvent<HTMLElement>) => {
			if (isLeftMenuVisible) {
				event.stopPropagation()
				setMenuAnimation(animations.Rollback)
				setIsLeftMenuVisibleWithDelay(false)
			}
		},
		[isLeftMenuVisible, setMenuAnimation, setIsLeftMenuVisibleWithDelay]
	)

	return (
		<div className='main-page'>
			<LeftMenu
				title={getTranslation('mainMenu')}
				hideLeftMenu={handleOnLeftMenuHide}
			/>
			<div
				className={classNames('main-page-content', {
					'main-page-content--rollout': menusAnimation === animations.Rollout,
					'main-page-content--rollback': menusAnimation === animations.Rollback,
				})}
			>
				{/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
				<div
					className='main-page-content__container'
					onClickCapture={handleOnPageClick}
					role='dialog'
				>
					<Header
						title={getTranslation('home')}
						onLeftMenuToggle={handleOnLeftMenuToggle}
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
