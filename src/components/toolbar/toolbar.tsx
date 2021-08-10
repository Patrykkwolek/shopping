import React from 'react'
import './toolbar.scss'
import './loginButton.scss'
import getTranslation from '../../translations'
import LinkButton from '../linkButton/linkButton'
import * as routes from '../../routes'

function Toolbar() {
	return (
		<div className='toolbar'>
			<div className='toolbar__button-group'>
				<LinkButton
					to={routes.signupPageUrl}
					className='login-button login-button--primary'
				>
					{getTranslation('signUp')}
				</LinkButton>
				<LinkButton to={routes.searchPageUrl} className='login-button'>
					{getTranslation('login')}
				</LinkButton>
			</div>
		</div>
	)
}

export default Toolbar
