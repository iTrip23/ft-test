/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/api/ft',
        destination: 'https://api.ft.com/content/search/v1?',
      },
    ]
  },
  images: {
    domains: ['www.ft.com'],
  }
}

module.exports = nextConfig
