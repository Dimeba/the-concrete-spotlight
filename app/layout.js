import { Heebo } from 'next/font/google'
import './globals.scss'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata = {
	title: 'The Concrete Podcast',
	description: `NYC-based online interview series 
  where real estate professionals step into the limelight.`,
	keywords:
		'New York City, New York, Real Estate, Brokers, Brokerage, Branding, Marketing, Sales, Investment Sales, Research, Podcast'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={heebo.className}>{children}</body>
		</html>
	)
}
