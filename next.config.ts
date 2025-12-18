import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'sotm-india'; // Your GitHub repository name

const nextConfig: NextConfig = {
  output: 'export', // Required for static export to GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
