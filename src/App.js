import React from "react"
import "./App.css"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import Main from "./Pages/Main"
import DetailPage from "./Pages/DetailPage"

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Main/>
				</Route>
				<Route path='/detail/:id'>
					<DetailPage/>
				</Route>
				<Redirect to='/'/>
			</Switch>
		</Router>
	)
}

export default App
