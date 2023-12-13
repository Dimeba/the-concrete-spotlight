'use client'

// styles
import styles from './Archive.module.scss'

// components
import EpisodesFilter from './EpisodesFilter'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ArrowButton from './ArrowButton'
import Link from 'next/link'

// hooks
import { useState } from 'react'
import { useFormatDate } from '@/hooks/useFormatDate'

const Archive = ({ episodes, category, colors }) => {
	const [filteredEpisodes, setFilteredEpisodes] = useState(episodes)

	return (
		<section
			style={{ backgroundColor: colors.light }}
			className={styles.archive}
		>
			<div className={styles.heading}>
				<h2>{category.fields.title} Archive</h2>
				<EpisodesFilter
					episodes={episodes}
					setFilteredEpisodes={setFilteredEpisodes}
				/>
			</div>

			<div className={styles.episodes}>
				{filteredEpisodes.map(episode => (
					<div className={styles.episode} key={episode.sys.id}>
						<h3>
							{episode.fields.title} with {episode.fields.guest} /{' '}
							{useFormatDate(episode.fields.date)}
						</h3>
						{documentToReactComponents(episode.fields.summary)}
						<Link
							href={`/episodes/${episode.fields.title
								.toLowerCase()
								.replace(/\s+/g, '-')}`}
						>
							<ArrowButton color={'white'}>Watch full episode</ArrowButton>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default Archive
