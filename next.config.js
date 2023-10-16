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
      },
      // Proxy for the user Login POST request
      {
        source: '/api/login',
        destination: 'https://swappify-auth.vercel.app/api/login',
      }
    ]
  }
}

module.exports = nextConfig;
