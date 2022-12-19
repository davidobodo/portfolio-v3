const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withPWA = require("next-pwa");
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
// 	enabled: process.env.ANALYZE === "true",
// });

const nextConfig = {
	reactStrictMode: false,
	webpack(config, options) {
		const { dev, isServer } = options;

		// Do not run type checking twice:
		if (dev && isServer) {
			config.plugins.push(new ForkTsCheckerWebpackPlugin());
		}

		return config;
	},
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
	images: {
		domains: ["images.unsplash.com", "miro.medium.com", "blog.davidobodo.com"],
	},
	// typescript: {
	// 	ignoreBuildErrors: true,
	// },
};

// module.exports = nextConfig;

module.exports = withPWA(nextConfig);
