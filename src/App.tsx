import React from 'react'
import './App.scss'
import LoginPage from './modules/loginPage/loginPage'
import SignupPage from './modules/signupPage/signupPage'
import MainPage from './modules/mainPage/mainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as routes from './routes'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={routes.homePageUrl}>
					<LoginPage />
				</Route>
				<Route path={routes.signupPageUrl}>
					<SignupPage />
				</Route>
				<Route path={routes.loginPageUrl}>
					<div />
				</Route>
				<Route path={routes.mainPageUrl}>
					<MainPage />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
