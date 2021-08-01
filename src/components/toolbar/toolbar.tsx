import React from 'react'
import './toolbar.scss'
import getTranslation from '../../translations'
import LoginButton from './loginButton/loginButton'

function Toolbar() {
	return (
		<div className='toolbar'>
			<div className='toolbar__button-group'>
				<LoginButton
					key={0}
					isPrimary
					text={getTranslation('signUp')}
					onClick={() => {}}
				/>
				<LoginButton
					key={1}
					text={getTranslation('login')}
					onClick={() => {}}
				/>
			</div>
		</div>
	)
}

export default Toolbar
