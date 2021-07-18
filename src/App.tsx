import React from 'react'
import './App.scss'
import WelcomeBox from './components/welcomeBox/welcomeBox'
import Slider from './components/slider/slider'

function App() {
	return (
		<div className='page-container'>
			<WelcomeBox />
			<Slider />
		</div>
	)
}

export default App
