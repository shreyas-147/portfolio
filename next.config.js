/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "drive.google.com",
      "images.unsplash.com",
      // Add other domains as needed
    ],
  },
};

module.exports = nextConfig;
