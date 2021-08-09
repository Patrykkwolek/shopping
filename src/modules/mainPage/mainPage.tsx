import React, { useState, useCallback } from 'react'
import './mainPage.scss'
import MainMenu from './mainMenu/mainMenu'
import MainPageContent from './mainPageContent/mainPageContent'
import getTranslation from '../../translations'
import { animations } from './mainPageContent/constants'

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

	return (
		<div className='main-page'>
			<MainMenu title={getTranslation('mainMenu')} />
			<MainPageContent
				animation={menusAnimation}
				onMainMenuClick={handleOnMainMenuClick}
			/>
		</div>
	)
}

export default MainPage
