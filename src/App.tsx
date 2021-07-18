import React from 'react'
import './App.scss'
import LoginPage from './modules/loginPage/loginPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<LoginPage />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
