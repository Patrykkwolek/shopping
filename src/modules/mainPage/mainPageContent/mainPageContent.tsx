import React from 'react'
import './mainPageContent.scss'
import Header from './header/header'
import getTranslation from '../../../translations'
import classNames from 'classnames'

type Props = {
	onMainMenuClick: () => void
	isSwiped: boolean
}

function MainPageContent(props: Props) {
	const { onMainMenuClick, isSwiped } = props

	return (
		<div
			className={classNames(
				'main-page-content',
				isSwiped ? 'main-page-content--swiped' : ''
			)}
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

export default MainPageContent
