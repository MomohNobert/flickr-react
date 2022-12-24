/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'farm66.staticflickr.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
