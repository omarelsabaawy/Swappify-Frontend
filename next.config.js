/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      // Proxy for the user registration POST request
      {
        source: '/api/register',
        destination: 'https://swappify-auth.vercel.app/api/register',
      }
    ]
  }
}

module.exports = nextConfig;
