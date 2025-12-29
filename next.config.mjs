/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/fitness-factory/' : '',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/fitness-factory' : '',
}

export default nextConfig
