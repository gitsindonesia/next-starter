/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true
	},
	images: {
		domains: ['gits.id']
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/styles')]
	}
}

module.exports = nextConfig
