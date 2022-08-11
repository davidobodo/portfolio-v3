import "#/styles/normalize.css";
import "#/styles/globals.css";
import Script from "next/script";
import smoothscroll from "smoothscroll-polyfill";
import type { AppProps } from "next/app";
import { useIsomorphicLayoutEffect, useRegisterGsapScrollTrigger } from "#/hooks";
import { Common, PageTransitionLayout } from "#/components";
import { PageTransitionsProvider, RadialGradientAnimContext } from "#/context";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	useRegisterGsapScrollTrigger();

	// const [animation, setAnimation] = useState<gsap.core.Timeline | null>(null);

	useIsomorphicLayoutEffect(() => {
		smoothscroll.polyfill();
	}, []);

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
					{/* <RadialGradientAnimContext.Provider
					value={{
						animation,
						setAnimation,
					}}
				> */}
					<PageTransitionLayout>
						<Component {...pageProps} />
						<Common />
					</PageTransitionLayout>
					{/* </RadialGradientAnimContext.Provider> */}
				</PageTransitionsProvider>
			</>
		</>
	);
}

export default MyApp;
