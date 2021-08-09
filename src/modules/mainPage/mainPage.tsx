import React, { useState, useCallback } from 'react'
import './mainPage.scss'
import MainMenu from './mainMenu/mainMenu'
import MainPageContent from './mainPageContent/mainPageContent'
import getTranslation from '../../translations'

function MainPage() {
	const [isMainMenuSwiped, setIsMainMenuSwiped] = useState(false)
	const handleOnMainMenuClick = useCallback(() => {
		setIsMainMenuSwiped(!isMainMenuSwiped)
	}, [setIsMainMenuSwiped, isMainMenuSwiped])

	return (
		<div className='main-page'>
			<MainMenu title={getTranslation('mainMenu')} />
			<MainPageContent
				isSwiped={isMainMenuSwiped}
				onMainMenuClick={handleOnMainMenuClick}
			/>
		</div>
	)
}

export default MainPage
