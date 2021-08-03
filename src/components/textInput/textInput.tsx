import React from 'react'
import './textInput.scss'
import User from '../../resources/img/user.svg'
import Email from '../../resources/img/email.svg'
import Password from '../../resources/img/password.svg'

type Props = {
	text: string
	placeholder: string
	icon?: 'user' | 'email' | 'password'
}

function TextInput(props: Props) {
	const { text, icon, placeholder } = props

	let Icon
	switch (icon) {
		case 'user':
			Icon = User
			break
		case 'email':
			Icon = Email
			break
		case 'password':
			Icon = Password
			break
		default:
			break
	}

	return (
		<div className='text-input-container'>
			{icon && (
				<div className='media-input'>
					<img src={Icon} alt='' />
				</div>
			)}
			<input
				type='text'
				placeholder={placeholder}
				className='text-input'
				value={text}
			/>
		</div>
	)
}

export default TextInput
