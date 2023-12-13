// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/Hero'
import TwoColumnBanner from '@/components/TwoColumnBanner'
import RecentEpisodes from '@/components/RecentEpisodes'
import Archive from '@/components/Archive'
import OneColumnBanner from '@/components/OneColumnBanner'

// hooks
import { useColors } from '@/hooks/useColors'

const client = createClient({
	space: process.env.space,
	accessToken: process.env.accessToken
})

export async function generateStaticParams() {
	const categories = await client.getEntries({
		content_type: 'categories'
	})

	return categories.items.map(category => ({
		slug: category.fields.title.toLowerCase()
	}))
}

export default async function Category({ params }) {
	const { slug } = params

	const episodes = await client.getEntries({
		content_type: 'episodes'
	})

	const getFilteredEpisodes = () => {
		const filteredEpisodes = episodes.items.filter(
			item => item.fields.category == category.fields.title
		)

		return filteredEpisodes
	}

	const getRecentEpisodes = () => {
		const recentEpisodes = episodes.items
			.filter(item => item.fields.category == category.fields.title)
			.slice(0, 4)

		return recentEpisodes
	}

	const categories = await client.getEntries({
		content_type: 'categories'
	})

	const category = categories.items.find(
		item => item.fields.title.toLowerCase() == slug
	)

	const colors = useColors(category.fields.title)

	return (
		<main>
			{/* Featured Episode */}
			<Hero episode={category.fields.episodes[0]} category={category} />

			{/* About featured episode category */}
			<TwoColumnBanner
				title={category.fields.subtitle}
				description={category.fields.description}
				richText
			/>

			{/* Recent Episodes */}
			<RecentEpisodes category={category} episodes={getRecentEpisodes()} />

			{/* Archive */}
			{category.fields.showArchive && (
				<Archive
					colors={colors}
					category={category}
					episodes={getFilteredEpisodes()}
				/>
			)}

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
