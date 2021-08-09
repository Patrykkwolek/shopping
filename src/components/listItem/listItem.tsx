import React, { ReactChild } from 'react'
import './list.scss'

type Props = {
	children: ReactChild
}

function ListItem(props: Props) {
	const { children } = props

	return <li className='list-item'>{children}</li>
}

export default ListItem
