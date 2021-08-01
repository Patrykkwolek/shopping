import React from 'react'
import './toolbar.scss'
import './loginButton.scss'
import getTranslation from '../../translations'
import LinkButton from '../linkButton/linkButton'

function Toolbar() {
	return (
		<div className='toolbar'>
			<div className='toolbar__button-group'>
				<LinkButton to='/signup' className='login-button login-button--primary'>
					{getTranslation('signUp')}
				</LinkButton>
				<LinkButton className='login-button' to='/login'>
					{getTranslation('login')}
				</LinkButton>
			</div>
		</div>
	)
}

export default Toolbar
