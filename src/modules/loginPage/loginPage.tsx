import React from 'react'
import './loginPage.scss'
import WelcomeBox from '../../components/welcomeBox/welcomeBox'
import Overview from './overview/overview'
import Toolbar from '../../components/toolbar/toolbar'

function LoginPage() {
	return (
		<div className='login-page'>
			<WelcomeBox />
			<Overview />
			<Toolbar />
		</div>
	)
}

export default LoginPage
