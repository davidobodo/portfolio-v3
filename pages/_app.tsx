import "#/styles/normalize.css";
import "#/styles/globals.css";
import type { AppProps } from "next/app";
import { useRegisterGsapScrollTrigger, useScrollToTop } from "#/hooks";
import { Contact } from "#/components";
import { PageTransitionContext } from "#/state";
import { useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
    useScrollToTop();
    useRegisterGsapScrollTrigger();

    const [timeline, setTransitionTimeline] = useState(null);

    return (
        <PageTransitionContext.Provider
            value={{
                timeline,
                setTransitionTimeline
            }}
        >
            <Component {...pageProps} />
            <Contact />
        </PageTransitionContext.Provider>
    );
}

export default MyApp;
