import "#/styles/normalize.css";
import "#/styles/globals.css";
import type { AppProps } from "next/app";
import { useRegisterGsapScrollTrigger, useScrollToTop } from "#/hooks";
import { RouteTransition } from "#/components";

function MyApp({ Component, pageProps }: AppProps) {
    useScrollToTop();
    useRegisterGsapScrollTrigger();
    return (
        <>
            <Component {...pageProps} />
            <RouteTransition />
        </>
    );
}

export default MyApp;
