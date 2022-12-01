const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withPWA = require("next-pwa");
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
// 	enabled: process.env.ANALYZE === "true",
// });

const nextConfig = {
	reactStrictMode: true,
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
};

// module.exports = nextConfig;

module.exports = withPWA(withMDX({ ...nextConfig, pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"] }));
