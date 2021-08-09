import React from 'react'
import '../../../components/listItem/list.scss'
import ListItem from '../../../components/listItem/listItem'
import LinkButton from '../../../components/linkButton/linkButton'
import Home from '../../../resources/img/home.svg'
import Orders from '../../../resources/img/orders.svg'
import getTranslation from '../../../translations'

type Props = {
	onMainMenuHide: () => void
}

function List(props: Props) {
	const { onMainMenuHide } = props

	return (
		<div className='list'>
			<ul>
				<ListItem>
					<LinkButton
						to='/main/a'
						className='list-item__content list-item__content--active'
						onClick={onMainMenuHide}
					>
						<img className='list-item__icon' src={Home} alt='' />
						<span className='list-item__text'>{getTranslation('home')}</span>
					</LinkButton>
				</ListItem>
				<ListItem>
					<LinkButton
						to='/main/orders'
						className='list-item__content'
						onClick={onMainMenuHide}
					>
						<img className='list-item__icon' src={Orders} alt='' />
						<span className='list-item__text'>{getTranslation('myOrder')}</span>
					</LinkButton>
				</ListItem>
			</ul>
		</div>
	)
}

export default List
