import "#/styles/normalize.css";
import "#/styles/globals.css";
import Script from "next/script";
import { useRegisterGsapScrollTrigger, useSmoothScroll } from "#/hooks";
import { Common, Awwwards } from "#/components";
import { AnimationsProvider } from "#/context";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "#/styles/prism-overrides.css";

function MyApp({ Component, pageProps }) {
	//Register gsap
	useRegisterGsapScrollTrigger();

	//Add smoothscroll polyfill for safari
	useSmoothScroll();

	return (
		<>
			<Script
				async
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			></Script>
			<Script strategy="lazyOnload" id="analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
						page_path: window.location.pathname,
					});
				`}
			</Script>

			<Script
				src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
			></Script>

			<Awwwards />

			{Component.withAnim ? (
				<AnimationsProvider>
					<Component {...pageProps} />
					<Common />
				</AnimationsProvider>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

export default MyApp;
