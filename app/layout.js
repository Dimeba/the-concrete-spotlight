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
		'New York City, New York, Real Estate, Brokers, Brokerage, Branding, Marketing, Sales, Investment Sales, Research, Podcast'
}

// components
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
