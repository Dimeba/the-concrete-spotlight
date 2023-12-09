'use client'

// styles
import styles from './Episodes.module.scss'

// components
import Category from './Category'
import RecentEpisodes from './RecentEpisodes'

// hooks
import { useState } from 'react'

const Episodes = ({ categories, episodes }) => {
	const [activeCategory, setActiveCategory] = useState(categories[0])

	// getting the latest episode in the category
	const getLatestEpisode = id => {
		const episode = episodes.find(item => item.sys.id == id)
		return episode
	}

	const getRecentEpisodes = () => {
		const recentEpisodes = episodes
			.filter(item => item.fields.category == activeCategory.fields.title)
			.slice(0, 4)

		return recentEpisodes
	}

	return (
		<>
			<section className={styles.episodes}>
				{categories.map(category => (
					<Category
						key={category.sys.id}
						title={category.fields.title}
						episode={getLatestEpisode(category.fields.episodes[0].sys.id)}
						setActiveCategory={() => setActiveCategory(category)}
					/>
				))}
			</section>
			<RecentEpisodes
				category={activeCategory.fields.title}
				episodes={getRecentEpisodes()}
			/>
		</>
	)
}

export default Episodes
