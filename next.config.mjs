/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  serverRuntimeConfig: {
    // Will only be available on the server side
    baseUrl: process.env.API_URL // Pass through env variables
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*`
      }
    ]
  }
}

export default nextConfig
