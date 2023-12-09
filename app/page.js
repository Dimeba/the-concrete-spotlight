// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/Hero'
import TwoColumnBanner from '@/components/TwoColumnBanner'
import Episodes from '@/components/Episodes'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const homepage = await client.getEntries({
		content_type: 'homepage'
	})

	const episodes = await client.getEntries({
		content_type: 'episodes'
	})

	const categories = await client.getEntries({
		content_type: 'categories'
	})

	const homeEpisode = homepage.items[0].fields.featuredEpisode

	const homeCategory = homepage.items[0].fields.categories.find(
		category => category.fields.title == homeEpisode.fields.category
	)

	return (
		<main>
			{/* Featured Episode */}
			<Hero episode={homeEpisode} category={homeCategory} />

			{/* About featured episode category */}
			<TwoColumnBanner
				title={homeCategory.fields.subtitle}
				description={homeCategory.fields.description}
				richText
			/>

			{/* Categories & Recent Episodes */}
			<Episodes
				episodes={episodes.items}
				categories={homepage.items[0].fields.categories.slice(0, 4)}
			/>

			{/* Bottom banner if it exists */}
			{homepage.items[0].fields.banner && (
				<TwoColumnBanner
					title={homepage.items[0].fields.banner.fields.title}
					description={homepage.items[0].fields.banner.fields.description}
				/>
			)}
		</main>
	)
}
