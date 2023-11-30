'use client'

// styles
import styles from './Audio.module.scss'

// components
import Image from 'next/image'

// hooks
import { useHexToRgba } from '@/hooks/useHexToRgba'
import { useState, useRef } from 'react'

const Audio = ({ color }) => {
	// background color
	const rgba = useHexToRgba(color, 0.6)

	// controls
	const [isPlaying, setIsPlaying] = useState(false)
	const [icon, setIcon] = useState('/play.svg')
	const audioRef = useRef(null)

	const togglePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
				setIcon('/play.svg')
			} else {
				audioRef.current.play()
				setIcon('/pause.svg')
			}
			setIsPlaying(!isPlaying)
		}
	}

	return (
		<div className={styles.audio} style={{ backgroundColor: rgba }}>
			<audio ref={audioRef}>
				<source src='/audio-placeholder.mp3' type='audio/mp3' />
			</audio>

			<div className={`sectionContainer ${styles.controls}`}>
				<Image
					src={icon}
					height={50}
					width={50}
					alt='Play / Pause button'
					onClick={togglePlayPause}
					style={{ cursor: 'pointer' }}
				/>

				<div>
					<p>
						Navigating Real Estate Investment Strategies with Peter Carillo |{' '}
						<span style={{ opacity: 0.7 }}>
							Marketing - Episode 34, August 13th
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Audio
