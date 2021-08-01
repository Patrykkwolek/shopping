import React from 'react'
import './loginButton.scss'
import classNames from 'classnames'

type Props = {
	text: string
	isPrimary?: boolean
	onClick: () => void
}

function LoginButton({ text, isPrimary = false, onClick }: Props) {
	return (
		<button
			type='button'
			className={classNames('login-button', {
				'login-button--primary': isPrimary,
			})}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default LoginButton
