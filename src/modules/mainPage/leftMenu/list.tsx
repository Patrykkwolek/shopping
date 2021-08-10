import React from 'react'
import '../../../components/listItem/listItem.scss'
import ListItem from '../../../components/listItem/listItem'
import LinkButton from '../../../components/linkButton/linkButton'
import { HomeIcon, OrderIcon } from '../../../resources/img/svgIcons'
import getTranslation from '../../../translations'
import classNames from 'classnames'
import * as routes from '../../../routes'
import { useLocation } from 'react-router-dom'

type Props = {
	onMainMenuHide: () => void
}

function List(props: Props) {
	const { onMainMenuHide } = props
	const location = useLocation()

	return (
		<div className='list'>
			<ul>
				<ListItem>
					<LinkButton
						to={routes.searchPageUrl}
						className={classNames('list-item__content', {
							'list-item__content--active':
								location.pathname === routes.searchPageUrl,
						})}
						onClick={onMainMenuHide}
					>
						<HomeIcon className='list-item__icon' />
						<span className='list-item__text'>{getTranslation('home')}</span>
					</LinkButton>
				</ListItem>
				<ListItem>
					<LinkButton
						to={routes.ordersPageUrl}
						className={classNames('list-item__content', {
							'list-item__content--active':
								location.pathname === routes.ordersPageUrl,
						})}
						onClick={onMainMenuHide}
					>
						<OrderIcon className='list-item__icon' />
						<span className='list-item__text'>{getTranslation('myOrder')}</span>
					</LinkButton>
				</ListItem>
			</ul>
		</div>
	)
}

export default List
