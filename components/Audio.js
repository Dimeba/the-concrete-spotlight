'use client'

// styles
import styles from './Audio.module.scss'

// components
import Image from 'next/image'

// hooks
import { useState, useEffect, useRef } from 'react'
import { useHexToRgba } from '@/hooks/useHexToRgba'
import { useFormatDate } from '@/hooks/useFormatDate'

const Audio = ({ colors, episode, category }) => {
	// background color
	const rgba = useHexToRgba(colors.dark, 0.8)

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

	// Handeling audio ending
	useEffect(() => {
		const audio = audioRef.current
		if (!audio) return

		const handleAudioEnd = () => {
			setIsPlaying(false)
			setIcon('/play.svg')
		}

		audio.addEventListener('ended', handleAudioEnd)

		return () => {
			audio.removeEventListener('ended', handleAudioEnd)
		}
	}, [audioRef])

	return (
		<div className={styles.audio} style={{ backgroundColor: rgba }}>
			<audio
				ref={audioRef}
				src={'https:' + episode.fields.audio.fields.file.url}
			/>

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
						{episode.fields.title} with {episode.fields.guest} |{' '}
						<span style={{ color: colors.light }}>
							{category} - Episode #{episode.fields.number},{' '}
							{useFormatDate(episode.fields.date)}
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Audio
