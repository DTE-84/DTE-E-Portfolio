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
module.exports = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};
export default nextConfig;
