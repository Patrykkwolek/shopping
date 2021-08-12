import React from 'react'
import './textInput.scss'
import {
	UserIcon,
	EmailIcon,
	PasswordIcon,
	ShowPasswordIcon,
} from '../../resources/img/svgIcons'
import classNames from 'classnames'

type Props = {
	text?: string
	placeholder: string
	icon?: 'user' | 'email' | 'password'
	secondaryIcon?: 'showPassword'
}

function TextInput(props: Props) {
	const { text = '', icon, secondaryIcon, placeholder } = props

	return (
		<div className='text-input-container'>
			{icon && (
				<div className='media-input media-input__left-icon'>
					{icon === 'user' && <UserIcon />}
					{icon === 'email' && <EmailIcon />}
					{icon === 'password' && <PasswordIcon />}
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
					{secondaryIcon === 'showPassword' && <ShowPasswordIcon />}
				</div>
			)}
		</div>
	)
}

export default TextInput
