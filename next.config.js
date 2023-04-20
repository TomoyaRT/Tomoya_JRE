const { i18n } = require('./next-i18next.config.js')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  productionBrowserSourceMaps: true,
  i18n,
  reactStrictMode: true,
})

module.exports = nextConfig
