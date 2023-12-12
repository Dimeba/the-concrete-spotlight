// styles
import styles from './RecommendedEpisode.module.scss'

// components
import ImageContainer from './ImageContainer'
import ArrowButton from './ArrowButton'
import Link from 'next/link'

const RecommendedEpisode = ({ episode, colors }) => {
	return (
		<section
			className={styles.recommendedEpisode}
			style={{ backgroundColor: colors.light }}
		>
			<h2>If you enjoyed this episode, check out:</h2>

			<div className={styles.episode} style={{ backgroundColor: colors.dark }}>
				<ImageContainer
					src={'https:' + episode.fields.cover.fields.file.url}
					alt='Episode Cover'
					className={styles.episodeCover}
				/>

				<div className={styles.content}>
					<h3 style={{ color: colors.light }}>
						{episode.fields.title} <span>with {episode.fields.guest}</span>
					</h3>
					<Link
						href={`/episodes/${episode.fields.title
							.toLowerCase()
							.replace(/\s+/g, '-')}`}
					>
						<ArrowButton color={colors.light}>Watch full episode</ArrowButton>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default RecommendedEpisode
