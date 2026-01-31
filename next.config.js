/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/My-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-portfolio/' : '',
}

module.exports = nextConfig
