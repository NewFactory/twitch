import React from "react"

const Card = ({detail}) => {
	if (detail.data) {
		console.log(detail.data)
		return (
			<table className='table'>
				<thead>
				<tr>
					<th>ID</th>
					<th>Language</th>
					<th>Name</th>
					<th>Game ID</th>
					<th>Game Name</th>
					<th>Title</th>
					<th>Delay</th>
				</tr>
				</thead>
				<tbody>
				{detail.data.map((d) => {
						return (
							<tr key={d.id}>
								<td>{d.broadcaster_id}</td>
								<td>{d.broadcaster_language}</td>
								<td>{d.broadcaster_name}</td>
								<td>{d.game_id}</td>
								<td>{d.game_name}</td>
								<td>{d.title}</td>
								<td>{d.delay}</td>
							</tr>
						)
					}
				)
				}
				< /tbody>
			</table>
		)
	}
	return (
		<table>
			<thead>
			<tr>
				<th>ID</th>
				<th>Language</th>
				<th>Name</th>
				<th>Game ID</th>
				<th>Game Name</th>
				<th>Title</th>
				<th>Delay</th>
			</tr>
			</thead>
		</table>
	)
}


export default Card
