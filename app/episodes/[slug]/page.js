// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/Hero'
import Transcript from '@/components/Transcript'
import RecommendedEpisode from '@/components/RecommendedEpisode'
import OneColumnBanner from '@/components/OneColumnBanner'

// hooks
import { useColors } from '@/hooks/useColors'

const client = createClient({
	space: process.env.space,
	accessToken: process.env.accessToken
})

export async function generateStaticParams() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const episodes = await client.getEntries({
		content_type: 'episodes'
	})

	return episodes.items.map(episode => ({
		slug: episode.fields.title
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, '')
			.replace(/\s+/g, '-')
	}))
}

export default async function Episode({ params }) {
	const { slug } = params

	// all episodes
	const episodes = await client.getEntries({
		content_type: 'episodes'
	})

	// current episode
	const episode = episodes.items.find(
		item =>
			item.fields.title
				.toLowerCase()
				.replace(/[^a-z0-9\s-]/g, '')
				.replace(/\s+/g, '-') == slug
	)

	// all categories
	const categories = await client.getEntries({
		content_type: 'categories'
	})

	// current category
	const category = categories.items.find(
		item => item.fields.title == episode.fields.category
	)

	const colors = useColors(category.fields.title)

	return (
		<main>
			{/* Featured Episode */}
			<Hero episode={episode} category={category} />

			{/* Transcript */}
			<Transcript episode={episode} colors={colors} />

			{/* Recommended Episode */}
			<RecommendedEpisode
				episode={
					episodes.items.filter(
						item =>
							item != episode && item.fields.category == category.fields.title
					)[0]
				}
				colors={colors}
			/>

			{/* Banner */}
			<OneColumnBanner
				title={category.fields.banner.fields.title}
				text={category.fields.banner.fields.description}
				buttonText={category.fields.banner.fields.buttonText.toUpperCase()}
				url={category.fields.banner.fields.buttonLink}
				colors={colors}
			/>
		</main>
	)
}
