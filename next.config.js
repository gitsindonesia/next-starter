/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['localhost']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')]
  }
}

module.exports = nextConfig
