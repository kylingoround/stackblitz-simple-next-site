/** @type {import('next').NextConfig} */
// import createMDX from '@next/mdx';

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   extension: /\.mdx?$/,
// });

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Add MDX as a page extension
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = withMDX(nextConfig);
