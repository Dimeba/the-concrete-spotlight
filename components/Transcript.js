// styles
import styles from './Transcript.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Transcript = ({ episode, colors }) => {
	return (
		<section className={styles.transcript}>
			<div className={styles.quote}>
				{documentToReactComponents(episode.fields.quote)}
			</div>

			<div className={styles.transcriptText}>
				<h3 style={{ color: colors.light, marginBottom: '1rem' }}>
					Episode Transcript
				</h3>
				<div>
					<div className={styles.text}>
						{documentToReactComponents(episode.fields.transcript)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Transcript
