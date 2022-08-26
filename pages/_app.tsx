import "#/styles/normalize.css";
import "#/styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import { useRegisterGsapScrollTrigger, useDeviceOrientation, useSmoothScroll } from "#/hooks";
import { Common, PageTransitionLayout } from "#/components";
import { PageTransitionsProvider } from "#/context";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
	//Register gsap
	useRegisterGsapScrollTrigger();

	//In case user changes their device orientation while on app (i.e potrait or landscape)
	useDeviceOrientation();

	//Add smoothscroll polyfill for safari
	useSmoothScroll();

	const router = useRouter();

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

			{/* <Script src="https://www.google.com/recaptcha/api.js"></Script> */}
			<Script
				src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
			></Script>

			{/* <Script src="https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded&render=explicit" async defer></Script> */}

			<>
				<PageTransitionsProvider>
					<PageTransitionLayout path={router.asPath}>
						<Component {...pageProps} />
						<Common />
					</PageTransitionLayout>
				</PageTransitionsProvider>
			</>
		</>
	);
}

export default MyApp;
