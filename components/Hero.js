// styles
import styles from './Hero.module.scss'

// components
import ImageContainer from './ImageContainer'
import SubscribeSection from './SubscribeSection'
import Audio from './Audio'

// hooks

const Hero = ({ colorLight, colorDark }) => {
	const tempAbout = `Discover real estate's inner workings with Peter Carrillo, Principal and Senior Managing Director at HKS Real Estate Advisors. Uncover investment strategies, trends, and challenges shaping today's market. Benefit from Peter's seasoned insights to enhance your investment approach, whether you're an expert or newcomer. Tune in to refine your strategies with this industry authority.`

	return (
		<>
			<section className='hero'>
				<ImageContainer
					src={'/peter-hero.jpg'}
					className={styles.heroImage}
					priority
					position='top'
					alt='Episode Preview Image'
				/>
				<div className={styles.heroContentContainer}>
					<div className={`sectionContainer ${styles.heroContent}`}>
						<div>
							<p>Episode #29</p>
							<div>
								<h1 style={{ marginBottom: '1rem', color: colorLight }}>
									Navigating Real Estate Investment Strategies with Peter
									Carillo
								</h1>
								<p>AUGUST 3RD, 2023</p>
							</div>
							<div className={styles.desktopSection}>
								<p>{tempAbout}</p>
								<SubscribeSection />
							</div>
						</div>
					</div>

					<Audio color={colorDark} />
				</div>
			</section>
			<div
				className={styles.mobileSection}
				style={{ backgroundColor: colorLight }}
			>
				<p>{tempAbout}</p>
				<SubscribeSection />
			</div>
		</>
	)
}

export default Hero
