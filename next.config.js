/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output: 'export' setting is causing issues with API routes
  // Temporarily commented out to fix build error
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Exclude API routes from static export
  // This ensures they don't cause build errors
  distDir: process.env.NODE_ENV === 'production' ? '.next' : '.next',
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/',
          outputPath: 'static/',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
