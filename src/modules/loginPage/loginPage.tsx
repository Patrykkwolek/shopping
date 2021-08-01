import React from 'react'
import './loginPage.scss'
import WelcomeBox from '../../components/welcomeBox/welcomeBox'
import Slider from '../../components/slider/slider'
import Toolbar from '../../components/toolbar/toolbar'

function LoginPage() {
	return (
		<div className='login-page'>
			<WelcomeBox />
			<Slider />
			<Toolbar />
		</div>
	)
}

export default LoginPage
