// styles
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import styles from './Episodes.module.scss'

// components
import ImageContainer from './ImageContainer'

const Category = ({ categoryClass }) => {
	return (
		<div className={`${styles.category} ${styles[categoryClass]}`}>
			<p className={styles.subtitle}>Deals / EP01</p>
			<ImageContainer
				src='/episode-placeholder.png'
				className={styles.categoryImage}
			/>
			<h3>Victor Sozio</h3>
			<h4>
				Elevating Real Estate: Marketing Strategies with a NYC Agency Founder
			</h4>
			<h4 className={styles.mobileLink}>Branding</h4>
		</div>
	)
}

export default Category
