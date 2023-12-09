'use client'

// styles
import styles from './Header.module.scss'

// components
import ImageContainer from './ImageContainer'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'

// hooks
import { useState } from 'react'

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<header
			className={styles.header}
			style={{
				height: openMenu ? '100vh' : '112px'
			}}
		>
			<div className={styles.logoAndHamburger}>
				<Link href='/' aria-label='Link to Homepage'>
					<ImageContainer src='/logo.svg' alt='Logo' className={styles.logo} />
				</Link>

				<div className={styles.hamburger}>
					<Hamburger
						size={24}
						onToggle={toggled => {
							if (toggled) {
								setOpenMenu(true)
							} else {
								setOpenMenu(false)
							}
						}}
					/>
				</div>
			</div>
			<nav style={{ display: openMenu ? 'block' : '' }}>
				<Link href='' aria-label='Link to About page'>
					<p>About</p>
				</Link>
				<p>Watch Now</p>
				<Link href='' aria-label='Link to Subscription page'>
					<p>Subscribe</p>
				</Link>
				<Link href='' aria-label='Link to Contact page'>
					<p>Contact</p>
				</Link>
			</nav>
		</header>
	)
}

export default Header
