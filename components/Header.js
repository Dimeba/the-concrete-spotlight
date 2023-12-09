'use client'

// styles
import styles from './Header.module.scss'

// components
import ImageContainer from './ImageContainer'
import Image from 'next/image'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useState } from 'react'

const Header = ({ categories }) => {
	const [openMenu, setOpenMenu] = useState(false)
	const [openSubMenu, setOpenSubMenu] = useState(false)
	const [hoveredCategory, setHoveredCategory] = useState(categories[0])

	const toggleSubMenu = () => {
		if (openSubMenu) {
			setOpenSubMenu(false)
		} else {
			setOpenSubMenu(true)
		}
	}

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
				<Link href='/about' aria-label='Link to About page'>
					<p>About</p>
				</Link>

				<p onClick={toggleSubMenu}>Watch Now</p>

				{openSubMenu && (
					<div className={styles.mobileSubMenu}>
						{categories.map(category => (
							<Link
								key={category.sys.id}
								href={`/${category.fields.title.toLowerCase()}`}
								aria-label={`Link to ${category.fields.title} page`}
							>
								<p>{category.fields.title}</p>
							</Link>
						))}
					</div>
				)}

				<Link href='/subscribe' aria-label='Link to Subscription page'>
					<p>Subscribe</p>
				</Link>

				<Link href='/contact' aria-label='Link to Contact page'>
					<p>Contact</p>
				</Link>
			</nav>

			{openSubMenu && (
				<div className={styles.subMenu}>
					<div>
						{categories.map(category => (
							<Link
								key={category.sys.id}
								href={`/${category.fields.title.toLowerCase()}`}
								aria-label={`Link to ${category.fields.title} page`}
							>
								<p
									className={styles.subMenuUrl}
									onMouseEnter={() => setHoveredCategory(category)}
								>
									{category.fields.title}
								</p>
							</Link>
						))}
					</div>

					<div className={styles.subMenuRight}>
						<Image
							src='/close.svg'
							width={16}
							height={16}
							alt='Close Button'
							onClick={() => setOpenSubMenu(false)}
							style={{ cursor: 'pointer' }}
						/>
						{documentToReactComponents(hoveredCategory.fields.subtitle)}
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
