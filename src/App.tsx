import React from 'react'
import './App.scss'
import LoginPage from './modules/loginPage/loginPage'
import SignupPage from './modules/signupPage/signupPage'
import MainPage from './modules/mainPage/mainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<LoginPage />
				</Route>
				<Route path='/signup'>
					<SignupPage />
				</Route>
				<Route path='/login'>
					<div />
				</Route>
				<Route path='/main'>
					<MainPage />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
