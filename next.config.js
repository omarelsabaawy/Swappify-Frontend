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
      },
      // Proxy for the users to send there feedbacks upon the contact us function
      {
        source: '/api/feedback',
        destination: 'https://swappify-contact-us.vercel.app/api/feedback'
      }
    ]
  }
}

module.exports = nextConfig;
