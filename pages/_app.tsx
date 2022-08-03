import "#/styles/normalize.css";
import "#/styles/globals.css";
import smoothscroll from "smoothscroll-polyfill";
import type { AppProps } from "next/app";
import { useIsomorphicLayoutEffect, useRegisterGsapScrollTrigger } from "#/hooks";
import { Common } from "#/components";
import { PageLeaveAnimationContext, RadialGradientAnimContext } from "#/state";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	useRegisterGsapScrollTrigger();

	const [pageLeaveAnimation, setPageLeaveAnimation] = useState<gsap.core.Timeline | null>(null);
	const [timeline, setTimeline] = useState();

	useIsomorphicLayoutEffect(() => {
		smoothscroll.polyfill();
	}, []);
	return (
		<PageLeaveAnimationContext.Provider
			value={{
				pageLeaveAnimation,
				setPageLeaveAnimation,
			}}
		>
			<RadialGradientAnimContext.Provider
				value={{
					timeline,
					setTimeline,
				}}
			>
				<Component {...pageProps} />
				<Common />
			</RadialGradientAnimContext.Provider>
		</PageLeaveAnimationContext.Provider>
	);
}

export default MyApp;
