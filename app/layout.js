import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata = {
	title: 'The Concrete Podcast',
	description: `NYC-based online interview series 
  where real estate professionals step into the limelight.`,
	keywords:
		'New York City, New York, Real Estate, Brokers, Brokerage, Branding, Marketing, Sales, Investment Sales, Research, Podcast',
	icons: {
		icon: '/favicon.svg'
	}
}

// contentful
import { createClient } from 'contentful'

// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function RootLayout({ children }) {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const homepage = await client.getEntries({
		content_type: 'homepage'
	})

	return (
		<html lang='en'>
			<body className={roboto.className}>
				<Header categories={homepage.items[0].fields.categories.slice(0, 4)} />
				{children}
				<Footer />
			</body>
		</html>
	)
}
