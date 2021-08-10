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

const getIcon = (icon: string) => {
	switch (icon) {
		case 'user':
			return UserIcon
		case 'email':
			return EmailIcon
		case 'password':
			return PasswordIcon
		default:
			return null
	}
}

const getSecondaryIcon = (icon: string) => {
	switch (icon) {
		case 'showPassword':
			return ShowPasswordIcon
		default:
			return null
	}
}

function TextInput(props: Props) {
	const { text = '', icon, secondaryIcon, placeholder } = props

	return (
		<div className='text-input-container'>
			{icon && (
				<div className='media-input media-input__left-icon'>
					{getIcon(icon)}
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
					{getSecondaryIcon(secondaryIcon)}
				</div>
			)}
		</div>
	)
}

export default TextInput
