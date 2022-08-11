import "#/styles/normalize.css";
import "#/styles/globals.css";
import Script from "next/script";
import smoothscroll from "smoothscroll-polyfill";
import type { AppProps } from "next/app";
import { useIsomorphicLayoutEffect, useRegisterGsapScrollTrigger } from "#/hooks";
import { Common } from "#/components";
import { InitialAppLoadContext, RadialGradientAnimContext } from "#/context";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	useRegisterGsapScrollTrigger();

	const [initialAppLoad, setInitialAppLoad] = useState<boolean>(true);
	const [animation, setAnimation] = useState<gsap.core.Timeline | null>(null);

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

			<InitialAppLoadContext.Provider
				value={{
					initialAppLoad,
					setInitialAppLoad,
				}}
			>
				<RadialGradientAnimContext.Provider
					value={{
						animation,
						setAnimation,
					}}
				>
					<Component {...pageProps} />
					<Common />
				</RadialGradientAnimContext.Provider>
			</InitialAppLoadContext.Provider>
		</>
	);
}

export default MyApp;
