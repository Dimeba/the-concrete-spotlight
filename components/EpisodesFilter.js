// styles
import styles from './EpisodesFilter.module.scss'

// hooks
import { useState, useEffect } from 'react'

const EpisodesFilter = ({ episodes, setFilteredEpisodes }) => {
	const [dates, setDates] = useState([])
	const [selectedDate, setSelectedDate] = useState('')

	// Getting unique dates
	const getUniqueDates = episodes => {
		const dateSet = new Set()

		episodes.forEach(episode => {
			const date = new Date(episode.fields.date)
			const year = date.getFullYear()
			const month = date.toLocaleString('default', { month: 'long' })
			dateSet.add(`${month} ${year}`)
		})

		return Array.from(dateSet)
	}

	useEffect(() => {
		setDates(getUniqueDates(episodes))
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
			<option value=''>Filter Episodes</option>
			{dates.map((date, index) => (
				<option key={index} value={date}>
					{date}
				</option>
			))}
		</select>
	)
}

export default EpisodesFilter
