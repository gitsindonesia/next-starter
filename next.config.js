/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true
	},
	images: {
		domains: ['gits.id']
	}
}

module.exports = nextConfig
