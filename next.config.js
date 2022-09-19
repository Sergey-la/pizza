const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	images: {
		domains: ['dodopizza-a.akamaihd.net', 'localhost'],
		loader: 'imgix',
		path: '',
	},
	env: {
		CLIENT_URL:
			process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000',
		API_URL: 'https://632826809a053ff9aab12ed0.mockapi.io',
	},
};

module.exports = nextConfig;
