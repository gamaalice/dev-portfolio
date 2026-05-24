/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/dev-portfolio',
  assetPrefix: '/dev-portfolio/',
}

export default nextConfig
