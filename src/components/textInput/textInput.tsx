import React from 'react'
import './textInput.scss'

type Props = {
	text: string
	placeholder: string
}

function TextInput(props: Props) {
	const { text, placeholder } = props
	return (
		<div className='text-input-container'>
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
