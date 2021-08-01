import React from 'react'
import './signupPage.scss'
import ViewLogo from '../../components/welcomeBox/viewLogo/viewLogo'
import getTranslation from '../../translations'

function SignupPage() {
	return (
		<div className='signup-page'>
			<div className='logo-container'>
				<ViewLogo />
			</div>
			<span className='signup-page__header'>
				{getTranslation('singupHeader')}
			</span>
			<span className='signup-page__header'>
				{getTranslation('singupHeader2nd')}
			</span>
		</div>
	)
}

export default SignupPage
