const withGraphql = require('next-plugin-graphql');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false
};

module.exports = withGraphql(nextConfig);
