import React from "react"
import "./header.css"
import {NavLink} from "react-router-dom"

const Header = () => {
	return (
		<div className="header">
			<h1><NavLink to="/">Twitch Search</NavLink></h1>
		</div>
	)
}

export default Header
