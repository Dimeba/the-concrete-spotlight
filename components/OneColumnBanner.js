// styles
import styles from './OneColumnBanner.module.scss'

const OneColumnBanner = ({ url, title, buttonText, text, colors }) => {
	return (
		<section
			className={styles.banner}
			style={{ backgroundColor: colors ? colors.dark : '#a1bd00' }}
		>
			<div>
				<h2>{title}</h2>

				{text && <p>{text}</p>}
			</div>

			{buttonText && (
				<a href={url}>
					<button
						style={{ backgroundColor: colors ? colors.light : '#a1bd00' }}
					>
						{buttonText}
					</button>
				</a>
			)}
		</section>
	)
}

export default OneColumnBanner
