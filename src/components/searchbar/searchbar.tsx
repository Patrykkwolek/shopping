import React, { useState, useCallback, ChangeEvent } from 'react'
import './searchbar.scss'
import { MagnifyIcon } from '../../resources/img/svgIcons'
import getTranslation from '../../translations'

type Props = {
	onSearchTextChange?: (_newText: string) => void
}

function Searchbar(props: Props) {
	const { onSearchTextChange } = props
	const [searchedText, setSearchedText] = useState('')
	const handleOnChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const newText = event.target.value
			setSearchedText(newText)
			if (onSearchTextChange) {
				onSearchTextChange(newText)
			}
		},
		[setSearchedText, onSearchTextChange]
	)

	return (
		<div className='searchbar'>
			<div className='searchbar__media'>
				<MagnifyIcon />
			</div>
			<input
				type='text'
				placeholder={getTranslation('findFoodHere')}
				className='searchbar__input'
				value={searchedText}
				onChange={handleOnChange}
			/>
		</div>
	)
}

export default Searchbar
