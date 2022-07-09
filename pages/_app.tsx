import "#/styles/normalize.css";
import "#/styles/globals.css";
import type { AppProps } from "next/app";
import { useRegisterGsapScrollTrigger, useScrollToTop, usePageTransition } from "#/hooks";
import { RouteTransition } from "#/components";
import { PageTransitionContext } from "#/state";
import { useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
    useScrollToTop();
    useRegisterGsapScrollTrigger();

    const { layersWrapperRef, noiseRef, displayLoader } = usePageTransition();
    const [timeline, setTransitionTimeline] = useState(null);
    return (
        <>
            <PageTransitionContext.Provider
                value={{
                    timeline,
                    setTransitionTimeline
                }}
            >
                <RouteTransition noiseRef={noiseRef} layersWrapperRef={layersWrapperRef} />
                <Component {...pageProps} />
            </PageTransitionContext.Provider>
        </>
    );
}

export default MyApp;
