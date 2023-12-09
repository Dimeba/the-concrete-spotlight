// styles
import styles from './TwoColumnBanner.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const TwoColumnBanner = ({ title, description }) => {
	return (
		<section className={styles.categoryInfo}>
			<div className={`sectionContainer ${styles.content}`}>
				<div className={styles.largeText}>
					{documentToReactComponents(title)}
				</div>
				<div className={styles.regularText}>
					{documentToReactComponents(description)}
				</div>
			</div>
		</section>
	)
}

export default TwoColumnBanner
