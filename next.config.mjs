import withBundleAnalyzer from '@next/bundle-analyzer'

/********************
 * Add plugins here *
 * ******************/
const plugins = [
	// https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer
	withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }),
]

/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		scrollRestoration: true,
	},
	headers: async () => [{ source: '/(.*)', headers: securityHeaders }],
	/** @param {import('webpack').Configuration} config */
	webpack: config => config,
	poweredByHeader: false,
}

// https://nextjs.org/docs/advanced-features/security-headers - taken from github.com/leerob/leerob.io
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`

const securityHeaders = [
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replaceAll('\n', ''),
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
]

export default () => plugins.reduce((_, plugin) => plugin(_), nextConfig)
