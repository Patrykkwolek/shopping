import React from 'react'
import './signupPage.scss'
import ViewLogo from '../../components/welcomeBox/viewLogo/viewLogo'
import TextInput from '../../components/textInput/textInput'
import getTranslation from '../../translations'
import LinkButton from '../../components/linkButton/linkButton'

function SignupPage() {
	return (
		<div className='signup-page'>
			<div className='signup-page__header-group'>
				<div className='logo-container'>
					<ViewLogo />
				</div>
				<span className='signup-page__header'>
					{getTranslation('signupHeader')}
				</span>
				<span className='signup-page__header'>
					{getTranslation('signupHeader2nd')}
				</span>
				<span className='signup-page__description'>
					{getTranslation('signupHeaderDescription')}
				</span>
			</div>
			<div className='signup-page__inputs-group'>
				<TextInput placeholder='John Doe' icon='user' />
				<TextInput placeholder='john.doe@gmail.com' icon='email' text='ef' />
				<TextInput
					placeholder='***'
					icon='password'
					secondaryIcon='showPassword'
				/>
			</div>
			<div className='signup-page__button-group'>
				<LinkButton to='/' className='login-button'>
					{getTranslation('signUp')}
				</LinkButton>
				<LinkButton
					to='/login'
					className='login-button login-button--secondary'
				>
					{getTranslation('login')}
				</LinkButton>
			</div>
		</div>
	)
}

export default SignupPage
