// styles
import styles from './Hero.module.scss'

// components
import Image from 'next/image'
import SubscribeSection from './SubscribeSection'
import Audio from './Audio'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useColors } from '@/hooks/useColors'

const Hero = ({ episode, category }) => {
	const colors = useColors(category.fields.title)

	return (
		<>
			<section className={styles.hero}>
				<Image
					src={'https:' + episode.fields.cover.fields.file.url}
					fill
					priority
					style={{ objectFit: 'cover', objectPosition: 'top', zIndex: '-1' }}
					quality={100}
					alt='Episode Cover Image'
				/>
				<div></div>
				<div className={styles.heroContentContainer}>
					<div className={`sectionContainer ${styles.heroContent}`}>
						<div>
							<p>Episode #{episode.fields.number}</p>
							<div>
								<h1 style={{ marginBottom: '1rem', color: colors.light }}>
									{episode.fields.title} with {episode.fields.guest}
								</h1>
								<p>{episode.fields.date.toUpperCase()}</p>
							</div>
							<div className={styles.desktopSection}>
								{documentToReactComponents(episode.fields.summary)}
								<SubscribeSection />
							</div>
						</div>
					</div>
				</div>
				<Audio
					color={colors.dark}
					audio={'https:' + episode.fields.audio.fields.file.url}
				/>
			</section>
			<div
				className={styles.mobileSection}
				style={{ backgroundColor: colors.light }}
			>
				{documentToReactComponents(episode.fields.summary)}
				<SubscribeSection />
			</div>
		</>
	)
}

export default Hero
