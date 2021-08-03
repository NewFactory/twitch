import React, {useState} from "react"
import "./search.css"

const Search = ({setState}) => {
	const [cursor, setCursor] = useState({})


	const getData = async (event) => {
		event.preventDefault()
		const query = event.target.elements.query.value

		if (query) {
			const apiUrl = await fetch(`https://api.twitch.tv/helix/search/channels?query=${query}
			&first=100`, {
				headers:
					{
						"Authorization": process.env.REACT_APP_TOKEN,
						"client-id": process.env.REACT_APP_ID,
					}
			})
			const jsonData = await apiUrl.json()
			setState(jsonData)
		} else {
			setState({
					error: "You need to type a request",
				}
			)
		}
	}

	return (
		<div className="search">
			<form onSubmit={getData}>
				<input
					type='text'
					id='query'
					name='query'
					placeholder='Channel'
				/>
				<button>Search</button>
			</form>
		</div>
	)
}

export default Search
