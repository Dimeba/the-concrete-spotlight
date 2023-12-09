// styles
import styles from './TwoColumnBanner.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const TwoColumnBanner = ({ title, description, richText }) => {
	return (
		<section className={styles.categoryInfo}>
			<div className={`sectionContainer ${styles.content}`}>
				<div className={styles.largeText}>
					{richText ? documentToReactComponents(title) : <h2>{title}</h2>}
				</div>
				<div className={styles.regularText}>
					{richText ? (
						documentToReactComponents(description)
					) : (
						<p>{description}</p>
					)}
				</div>
			</div>
		</section>
	)
}

export default TwoColumnBanner
