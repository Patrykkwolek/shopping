import React from 'react'
import './loginPage.scss'
import WelcomeBox from '../../components/welcomeBox/welcomeBox'
import Slider from '../../components/slider/slider'
import LoginButton from '../../components/loginButton/loginButton'
import getTranslation from '../../translations'

function LoginPage() {
	return (
		<div className='page-container'>
			<WelcomeBox />
			<Slider />
			<LoginButton key={0} text={getTranslation('signUp')} onClick={() => {}} />
			<LoginButton key={1} text={getTranslation('login')} onClick={() => {}} />
		</div>
	)
}

export default LoginPage
