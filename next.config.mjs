/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DTE-E-Portfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 80],
  },
};

export default nextConfig;
