import "#/styles/normalize.css";
import "#/styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import { useRegisterGsapScrollTrigger, useSmoothScroll } from "#/hooks";
import { Common } from "#/components";
import { AnimationsProvider } from "#/context";

function MyApp({ Component, pageProps }: AppProps) {
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

			{Component.isPlain ? (
				<Component {...pageProps} />
			) : (
				<AnimationsProvider>
					<Component {...pageProps} />
					<Common />
				</AnimationsProvider>
			)}
		</>
	);
}

export default MyApp;
