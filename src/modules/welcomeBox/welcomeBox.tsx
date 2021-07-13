import React from 'react'
import './welcomeBox.scss'
import ViewLogo from '../viewLogo/viewLogo'
import LogoImg from '../../resources/img/text-logo.png'
import getTranslation from '../../translations'

function WelcomeBox() {
	return (
		<div className='welcome-box'>
			<ViewLogo />
			<img className='logo-name' src={LogoImg} alt='' />
			<p className='logo-text'>{getTranslation('logoText')}</p>
		</div>
	)
}

export default WelcomeBox
