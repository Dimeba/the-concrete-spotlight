// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/Hero'
import CategoryInfo from '@/components/CategoryInfo'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const episodes = await client.getEntries({
		content_type: 'episodes'
	})

	const homeEpisode = episodes.items.filter(
		episode => episode.fields.homeFeatured == true
	)

	return (
		<main>
			<Hero
				color='#a1bd00'
				colorLight='#a1bd00'
				colorDark='#0f3838'
				episode={homeEpisode[0]}
			/>
			<CategoryInfo />
		</main>
	)
}
