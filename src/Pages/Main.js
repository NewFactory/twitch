import React, {useState} from "react"
import Header from "../Components/Header"
import Search from "../Components/Search"
import Info from "../Components/Info"

const Main = () => {
	const [state, setState] = useState({})

	return (
		<div className="main">
			<Header/>
			<Search setState={setState}/>
			<Info state={state}/>
		</div>
	)
}

export default Main
