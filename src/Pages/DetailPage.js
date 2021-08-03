import React, {useCallback, useEffect, useState} from "react"
import Header from "../Components/Header"
import Card from "../Components/Card"
import {useParams} from "react-router-dom"


const DetailPage = () => {
	const [detail, setDetail] = useState([])
	const channelId = useParams().id

	console.log(detail)

	const getInfo = useCallback(async () => {
		const apiUrl = await fetch(`https://api.twitch.tv/helix/channels?broadcaster_id=${channelId}`, {
					headers:
						{
							"Authorization": process.env.REACT_APP_TOKEN,
							"client-id": process.env.REACT_APP_ID,
						}
				})
				const jsonData = await apiUrl.json()
				setDetail(jsonData)
			}, [channelId])

	useEffect(() => {
		getInfo(channelId).then(r => setDetail)}, [channelId, getInfo])


	return (
		<div className='detail'>
			<Header/>
			<Card detail={detail}/>
		</div>
	)
}

export default DetailPage
