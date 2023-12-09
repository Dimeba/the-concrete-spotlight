// styles
import styles from './Episodes.module.scss'

// components
import ImageContainer from './ImageContainer'
import ArrowButton from './ArrowButton'

// hooks
import { useColors } from '@/hooks/useColors'

const Category = ({ title, episode, setActiveCategory }) => {
	const colors = useColors(title)

	return (
		<div
			className={styles.category}
			style={{ backgroundColor: colors.dark }}
			onClick={setActiveCategory}
		>
			<div className={styles.categoryBackground}></div>
			<p className={styles.subtitle} style={{ borderColor: colors.light }}>
				{title} / EP{episode.fields.number}
			</p>
			<ImageContainer
				src={'https:' + episode.fields.guestPhoto.fields.file.url}
				className={styles.categoryImage}
			/>
			<h3>{episode.fields.guest}</h3>
			<h4 style={{ color: colors.light }}>{episode.fields.title}</h4>
			<div className={styles.mobileLink}>
				<ArrowButton color={colors.light} isLarge>
					{title}
				</ArrowButton>
			</div>
		</div>
	)
}

export default Category
