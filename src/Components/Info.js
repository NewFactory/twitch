import React from "react"
import "./info.css"
import {Link} from "react-router-dom"


function Info({state}) {
	console.log(state)

		if (state.data) {
		return (
			<table className='table'>
				<thead>
				<tr>
					<th>Name</th>
					<th>Language</th>
					<th>Game Name</th>
					<th>Title</th>
					<th>Started</th>
					<th>Info</th>
				</tr>
				</thead>
				<tbody>
				{state.data.map((d) => {
					return (
						<tr key={d.id}>
							<td>{d.display_name}</td>
							<td>{d.broadcaster_language}</td>
							<td>{d.game_name}</td>
							<td>{d.title}</td>
							<td>{d.started_at}</td>
							<td>
								<Link to={`/detail/${d.id}`}>Info</Link>
							</td>
						</tr>
					)
				})}
				< /tbody>
			</table>
		)
	}
	return (
		<div className="error">
		<p>{state.error}</p>
		</div>
	)
}


export default Info
