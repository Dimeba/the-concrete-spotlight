// styles
import styles from './TwoColumnBanner.module.scss'

const TwoColumnBanner = () => {
	return (
		<section className={styles.categoryInfo}>
			<div className={`sectionContainer ${styles.content}`}>
				<div className={styles.largeText}>
					<h2>
						From brokers to developers, from listings to legacies - raw insights
						from industry professionals
					</h2>
				</div>
				<div className={styles.regularText}>
					<p>
						The Concrete Spotlight — NYC-based online interview series where
						real estate professionals step into the limelight. Direct from the
						city's bustling streets, we delve into four core realms: Deals and
						Unscripted Market Insights, along with Real Estate Branding and
						Marketing stories and deep dives into the heartbeat of the NYC Real
						Estate world
					</p>
				</div>
			</div>
		</section>
	)
}

export default TwoColumnBanner
