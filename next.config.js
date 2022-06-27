/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    API_URL: "https://feedget-server-production-d627.up.railway.app"
  },
}
