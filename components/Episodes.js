// styles
import styles from './Episodes.module.scss'

// components
import Category from './Category'

const Episodes = () => {
	return (
		<section className={styles.episodes}>
			<Category categoryClass='deals' />
			<Category categoryClass='marketing' />
			<Category categoryClass='branding' />
			<Category categoryClass='insights' />
		</section>
	)
}

export default Episodes
