// styles
import styles from './EpisodesFilter.module.scss'

// hooks
import { useState, useEffect } from 'react'

const EpisodesFilter = ({ episodes, setFilteredEpisodes }) => {
	const [dates, setDates] = useState([])
	const [selectedDate, setSelectedDate] = useState('')

	// Getting unique dates
	const getUniqueDates = episodes => {
		const dates = episodes.map(episode => new Date(episode.fields.date))

		const uniqueDates = Array.from(
			new Set(
				dates.map(
					date =>
						`${date.toLocaleString('default', {
							month: 'long'
						})} ${date.getFullYear()}`
				)
			)
		)

		return uniqueDates.sort((a, b) => {
			const dateA = new Date(
				a.split(' ')[1],
				new Date(Date.parse(a.split(' ')[0] + ' 1, 2012')).getMonth()
			)
			const dateB = new Date(
				b.split(' ')[1],
				new Date(Date.parse(b.split(' ')[0] + ' 1, 2012')).getMonth()
			)
			return dateB - dateA
		})
	}

	useEffect(() => {
		const uniqueDates = getUniqueDates(episodes)
		setDates(uniqueDates)
		if (uniqueDates.length > 0) {
			setSelectedDate(uniqueDates[0]) // Set to the most recent date
		}
	}, [episodes])

	const filterEpisodesByDate = (episodes, selectedDate) => {
		if (!selectedDate) return episodes

		return episodes.filter(episode => {
			const date = new Date(episode.fields.date)
			const year = date.getFullYear()
			const month = date.toLocaleString('default', { month: 'long' })
			return `${month} ${year}` === selectedDate
		})
	}

	useEffect(() => {
		setFilteredEpisodes(filterEpisodesByDate(episodes, selectedDate))
	}, [selectedDate, episodes])

	const handleDateSelect = date => {
		setSelectedDate(date)
	}

	return (
		<select
			className={styles.filter}
			onChange={e => handleDateSelect(e.target.value)}
		>
			{/* <option value=''>Filter by Month</option> */}
			{dates.map((date, index) => (
				<option key={index} value={date}>
					Filter by: {date}
				</option>
			))}
		</select>
	)
}

export default EpisodesFilter
