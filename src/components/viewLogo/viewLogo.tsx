import React from 'react'
import './viewLogo.scss'
import Logo from '../../resources/img/logo.svg'

function ViewLogo() {
	return (
		<div className='view-logo'>
			<div className='logo-icon'>
				<img src={Logo} alt='' />
			</div>
		</div>
	)
}

export default ViewLogo
