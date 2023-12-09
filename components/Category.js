// styles
import styles from './Episodes.module.scss'

// components
import ImageContainer from './ImageContainer'
import ArrowButton from './ArrowButton'
import Link from 'next/link'

// hooks
import { useColors } from '@/hooks/useColors'

const Category = ({ title, episode, setActiveCategory }) => {
	const colors = useColors(title)

	return (
		<>
			<div className={styles.category} style={{ backgroundColor: colors.dark }}>
				{/* <div className={styles.categoryBackground}></div> */}
				<p className={styles.subtitle} style={{ borderColor: colors.light }}>
					{title} / EP{episode.fields.number}
				</p>
				<ImageContainer
					src={'https:' + episode.fields.guestPhoto.fields.file.url}
					className={styles.categoryImage}
				/>
				<h3>{episode.fields.guest}</h3>
				<Link href={''} aria-label='Link to the episode'>
					<h4 style={{ color: colors.light }}>{episode.fields.title}</h4>
				</Link>
				<a
					className={styles.moreButton}
					href='#episodes'
					onClick={setActiveCategory}
				>
					<ArrowButton color={colors.light}>More on {title}</ArrowButton>
				</a>
				<div className={styles.mobileLink}>
					<ArrowButton color={colors.light} isLarge>
						{title}
					</ArrowButton>
				</div>
			</div>
		</>
	)
}

export default Category
