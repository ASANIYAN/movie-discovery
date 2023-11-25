/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_ACCESS_TOKEN: process.env.NEXT_ACCESS_TOKEN,
        NEXT_API_KEY: process.env.NEXT_API_KEY,
    },
    images: {
        // domains: ['image.tmdb.org'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
