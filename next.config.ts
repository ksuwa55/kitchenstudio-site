/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // generate static HTML
  images: { unoptimized: true }, // allow next/image without image optimization server
};

module.exports = nextConfig;
