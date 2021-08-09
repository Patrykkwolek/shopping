import React from 'react'
import './home.scss'
import Header from '../../header/header'
import getTranslation from '../../../../translations'
import classNames from 'classnames'
import { animations, animationsTypes } from '../../constants'

type Props = {
	onMainMenuClick: () => void
	animation: animationsTypes
}

function Home(props: Props) {
	const { onMainMenuClick, animation } = props

	return (
		<div
			className={classNames('main-page-content', {
				'main-page-content--rollout': animation === animations.Rollout,
				'main-page-content--rollback': animation === animations.Rollback,
			})}
		>
			<div className='main-page-content__container'>
				<Header
					title={getTranslation('home')}
					onMainMenuClick={onMainMenuClick}
				/>
			</div>
		</div>
	)
}

export default Home
