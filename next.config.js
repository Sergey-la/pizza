const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	images: {
		domains: [
			process.env.NODE_ENV === 'production'
				? 'dodopizza-a.akamaihd.net'
				: 'localhost',
		],
		loader: 'imgix',
		path: '',
	},
	env: {
		CLIENT_URL:
			process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000',
	},
};

module.exports = nextConfig;
