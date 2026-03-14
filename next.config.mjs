/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd && { output: 'export' }),
  ...(isProd && { basePath: '/DTE-E-Portfolio' }),
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 80],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;