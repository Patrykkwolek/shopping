import React from 'react'
import './welcomeBox.scss'
import ViewLogo from '../viewLogo/viewLogo'
import Title from '../../resources/img/title.svg'
import getTranslation from '../../translations'

function WelcomeBox() {
	return (
		<div className='welcome-box'>
			<ViewLogo />
			<img src={Title} alt='' className='logo-title' />
			<p className='logo-text'>{getTranslation('logoText')}</p>
		</div>
	)
}

export default WelcomeBox
