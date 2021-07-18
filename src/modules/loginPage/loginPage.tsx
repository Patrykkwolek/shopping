import React from 'react'
import './loginPage.scss'
import WelcomeBox from '../../components/welcomeBox/welcomeBox'
import Slider from '../../components/slider/slider'

function LoginPage() {
	return (
		<div className='page-container'>
			<WelcomeBox />
			<Slider />
		</div>
	)
}

export default LoginPage
