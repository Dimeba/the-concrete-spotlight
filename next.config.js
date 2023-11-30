/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'downloads.ctfassets.net',
				pathname: '**'
			}
		],
		// domains: ['images.ctfassets.net', 'downloads.ctfassets.net'],
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 768, 1024, 1280, 1600]
	}
}

module.exports = nextConfig
