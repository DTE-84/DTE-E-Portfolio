/** @type {import('next').NextConfig} */
const nextConfig = {
  
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 80],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;
