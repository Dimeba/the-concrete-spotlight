// styles
import styles from './Footer.module.scss'

// components
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`sectionContainer ${styles.footerContent}`}>
				<div className={styles.footerColumn}>
					<Link href='/deals' aria-label='Deals'>
						<p>Deals</p>
					</Link>
					<Link href='/marketing' aria-label='Marketing'>
						<p>Marketing</p>
					</Link>
					<Link href='/branding' aria-label='Branding'>
						<p>Branding</p>
					</Link>
					<Link href='/insights' aria-label='Insights'>
						<p>Insights</p>
					</Link>
				</div>

				<div className={styles.footerColumn}>
					<Link href='/about' aria-label='About Us'>
						<p>About Us</p>
					</Link>
					<Link href='/contact' aria-label='Contact Us'>
						<p>Contact Us</p>
					</Link>
					<Link href='/subscribe' aria-label='Subscribe'>
						<p>Subscribe</p>
					</Link>
				</div>

				<div className={styles.footerColumn}>
					<Link href='/#' aria-label='Instagram'>
						<p>Instagram</p>
					</Link>
					<Link href='/#' aria-label='LinkedIn'>
						<p>LinkedIn</p>
					</Link>
					<Link href='/#' aria-label='You Tube'>
						<p>You Tube</p>
					</Link>
				</div>

				<div className={styles.footerColumn}>
					<Link href='/terms' aria-label='Terms of Use'>
						<p>Terms of Use</p>
					</Link>
					<Link href='/privacy' aria-label='Privacy Policy'>
						<p>Privacy Policy</p>
					</Link>

					<div className={styles.desophyInfo}>
						<Link href='https://desophy.com' aria-label='DeSophy Website'>
							<Image
								src='https://desophy.com/logo-white.svg'
								width={100}
								height={24}
								alt='DeSophy logo'
							/>
						</Link>

						<p>
							Inspired by Culture
							<br />& Storytelling
						</p>
						<p>© 2023 DeSophy. All rights reserved.</p>
					</div>
				</div>

				<div className={`${styles.footerColumn} ${styles.desophyInfoMobile}`}>
					<Link href='https://desophy.com' aria-label='DeSophy Website'>
						<Image
							src='https://desophy.com/logo-white.svg'
							width={100}
							height={24}
							alt='DeSophy logo'
						/>
					</Link>

					<p>
						Inspired by Culture
						<br />& Storytelling
					</p>
					<p>© 2023 DeSophy. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
