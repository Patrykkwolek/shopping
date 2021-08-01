import React, { MouseEventHandler, ReactNode } from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

type Props = RouteComponentProps & {
	to: string
	onClick?: MouseEventHandler
	children?: ReactNode
	className: string
}

const LinkButton = (props: Props) => {
	const { children, className, history, to, onClick, ...rest } = props
	return (
		<button
			type='button'
			className={className}
			{...rest}
			onClick={event => {
				if (onClick) {
					onClick(event)
				}
				history.push(to)
			}}
		>
			{children}
		</button>
	)
}

export default withRouter(LinkButton)
