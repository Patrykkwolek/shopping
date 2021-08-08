import React from 'react'
import './textInput.scss'
import User from '../../resources/img/user.svg'
import Email from '../../resources/img/email.svg'
import Password from '../../resources/img/password.svg'
import ShowPassword from '../../resources/img/showPassword.svg'
import classNames from 'classnames'

type Props = {
	text?: string
	placeholder: string
	icon?: 'user' | 'email' | 'password'
	secondaryIcon?: 'showPassword'
}

function TextInput(props: Props) {
	const { text = '', icon, secondaryIcon, placeholder } = props

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

	let SecondaryIcon
	switch (secondaryIcon) {
		case 'showPassword':
			SecondaryIcon = ShowPassword
			break
		default:
			break
	}

	return (
		<div className='text-input-container'>
			{icon && (
				<div className='media-input media-input__left-icon'>
					<img src={Icon} alt='' />
				</div>
			)}
			<input
				type='text'
				placeholder={placeholder}
				className={classNames(
					'text-input',
					secondaryIcon ? 'text-input--symmetric' : ''
				)}
				value={text}
			/>
			{secondaryIcon && (
				<div className='media-input media-input__right-icon'>
					<img src={SecondaryIcon} alt='' />
				</div>
			)}
		</div>
	)
}

export default TextInput
