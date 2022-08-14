import "#/styles/normalize.css";
import "#/styles/globals.css";
import Script from "next/script";
import smoothscroll from "smoothscroll-polyfill";
import type { AppProps } from "next/app";
import { useIsomorphicLayoutEffect, useRegisterGsapScrollTrigger } from "#/hooks";
import { Common, PageTransitionLayout } from "#/components";
import { PageTransitionsProvider } from "#/context";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
	useRegisterGsapScrollTrigger();

	useIsomorphicLayoutEffect(() => {
		smoothscroll.polyfill();
	}, []);

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
