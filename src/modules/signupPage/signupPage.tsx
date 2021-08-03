import React from 'react'
import './signupPage.scss'
import ViewLogo from '../../components/welcomeBox/viewLogo/viewLogo'
import TextInput from '../../components/textInput/textInput'
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
			<span className='signup-page__description'>
				{getTranslation('singupHeaderDescription')}
			</span>
			<TextInput text='dww' placeholder='dw' icon='user' />
			<TextInput text='dww' placeholder='dw' icon='email' />
			<TextInput text='dww' placeholder='dw' icon='password' />
		</div>
	)
}

export default SignupPage
