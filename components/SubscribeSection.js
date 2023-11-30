// styles
import styles from './SubscribeSection.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const SubscribeSection = () => {
	return (
		<div className={styles.subscribeSection}>
			<p>SUBSCRIBE ON</p>
			<div className={styles.subscribeButtons}>
				<Link href='#' target='_blank' aria-label='Spotify'>
					<div className={styles.button}>
						<Image
							src={'/spotify.svg'}
							height={24}
							width={24}
							alt='Spotify Icon'
						/>
						<p>SPOTIFY</p>
					</div>
				</Link>
				<Link href='#' target='_blank' aria-label='Podcast'>
					<div className={styles.button}>
						<Image
							src={'/podcast.svg'}
							height={24}
							width={24}
							alt='Podcast Icon'
						/>
						<p>PODCAST</p>
					</div>
				</Link>
				<Link href='#' target='_blank' aria-label='Google'>
					<div className={styles.button}>
						<Image
							src={'/google.svg'}
							height={24}
							width={24}
							alt='Google Icon'
						/>
						<p>GOOGLE</p>
					</div>
				</Link>
				<Link href='#' target='_blank' aria-label='You Tube'>
					<div className={styles.button}>
						<Image
							src={'/youtube.svg'}
							height={24}
							width={26}
							alt='You Tube Icon'
						/>
						<p>YOU TUBE</p>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default SubscribeSection
