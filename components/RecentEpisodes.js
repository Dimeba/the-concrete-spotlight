// styles
import styles from './Episodes.module.scss'

// components
import ImageContainer from './ImageContainer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import ArrowButton from './ArrowButton'

// hooks
import { useColors } from '@/hooks/useColors'

const RecentEpisodes = ({ category, episodes, showBottomLink }) => {
	const colors = useColors(category)

	return (
		<>
			<section
				id='episodes'
				className={styles.recentEpisodes}
				style={{ backgroundColor: colors.dark }}
			>
				<div className='sectionContainer'>
					<h2 style={{ color: colors.light }}>More on {category}</h2>
				</div>
				<div className={styles.episodes}>
					{episodes.map(episode => (
						<div className={styles.episode} key={episode.sys.id}>
							<ImageContainer
								src={'https:' + episode.fields.cover.fields.file.url}
								className={styles.episodeCover}
							/>
							<div className={styles.episodeInfo}>
								<h3>
									<span style={{ color: colors.light }}>
										{episode.fields.title}
									</span>{' '}
									with {episode.fields.guest}
								</h3>
								{documentToReactComponents(episode.fields.summary)}

								<Link href={''} aria-label='Link tothe  full episode'>
									<ArrowButton color={colors.light}>
										{category} / {episode.fields.number}
									</ArrowButton>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
			{showBottomLink && (
				<section
					className={styles.bottomLink}
					style={{ backgroundColor: colors.light }}
				>
					<Link href={''} aria-label={`Link to all episodes on ${category}`}>
						<h2 style={{ color: colors.dark }}>
							Listen to all episodes on {category}
						</h2>
					</Link>
				</section>
			)}
		</>
	)
}

export default RecentEpisodes
