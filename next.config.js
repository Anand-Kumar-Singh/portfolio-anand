/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: '/portfolio-anand',  // Your GitHub repo name
  assetPrefix: '/portfolio-anand',
};

module.exports = nextConfig;
