'use client'

// styles
import styles from './Episodes.module.scss'

// components
import ImageContainer from './ImageContainer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import ArrowButton from './ArrowButton'
import EpisodesFilter from './EpisodesFilter'

// hooks
import { useColors } from '@/hooks/useColors'
import { useFormatDate } from '@/hooks/useFormatDate'
import { useState } from 'react'

const RecentEpisodes = ({ category, episodes, isHomepage }) => {
	const colors = useColors(category.fields.title)
	const [filteredEpisodes, setFilteredEpisodes] = useState(episodes)

	return (
		<>
			<section
				id='episodes'
				className={`${styles.recentEpisodes} ${
					isHomepage ? styles.hiddenOnMobile : ''
				}`}
				style={{ backgroundColor: colors.dark }}
			>
				<div className={`sectionContainer ${styles.episodesHeader}`}>
					<div>
						{isHomepage ? (
							<h2 style={{ color: colors.light }}>
								More on {category.fields.title}
							</h2>
						) : (
							<h2 style={{ color: colors.light }}>
								Recent {category.fields.title} Episodes
							</h2>
						)}
						{/* {!isHomepage &&
							documentToReactComponents(category.fields.description)} */}
					</div>
					{/* {!isHomepage && (
						<EpisodesFilter
							episodes={episodes}
							setFilteredEpisodes={setFilteredEpisodes}
						/>
					)} */}
				</div>
				<div className={styles.episodes}>
					{filteredEpisodes.map(episode => (
						<div className={styles.episode} key={episode.sys.id}>
							<ImageContainer
								src={'https:' + episode.fields.cover.fields.file.url}
								className={styles.episodeCover}
							/>
							<div className={styles.episodeInfo}>
								<div>
									<h3>
										<span style={{ color: colors.light }}>
											{episode.fields.title}
										</span>{' '}
										with {episode.fields.guest}
									</h3>
									<p style={{ marginTop: '1rem' }}>
										{useFormatDate(episode.fields.date)}
									</p>
								</div>
								<div className={styles.episodeSummary}>
									{documentToReactComponents(episode.fields.summary)}
								</div>

								<Link
									href={`/episodes/${episode.fields.title
										.toLowerCase()
										.replace(/[^a-z0-9\s-]/g, '')
										.replace(/\s+/g, '-')}`}
									aria-label='Link to the full episode'
								>
									<ArrowButton color={colors.light}>
										{category.fields.title} / #{episode.fields.number}
									</ArrowButton>
								</Link>

								<hr className={styles.episodesBorder} />
							</div>
						</div>
					))}
				</div>
			</section>
			{isHomepage && (
				<section
					className={styles.bottomLink}
					style={{ backgroundColor: colors.light }}
				>
					<Link
						href={`/${category.fields.title.toLowerCase()}`}
						aria-label={`Link to all episodes on ${category.fields.title}`}
					>
						<h2 style={{ color: colors.dark }}>
							Listen to all episodes on {category.fields.title}
						</h2>
					</Link>
				</section>
			)}
		</>
	)
}

export default RecentEpisodes
