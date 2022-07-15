import "#/styles/normalize.css";
import "#/styles/globals.css";
import type { AppProps } from "next/app";
import { useRegisterGsapScrollTrigger, useScrollToTop } from "#/hooks";
import { Common } from "#/components";
import { PageLeaveAnimationContext } from "#/state";
import { useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
    useScrollToTop();
    useRegisterGsapScrollTrigger();

    const [pageLeaveAnimation, setPageLeaveAnimation] = useState(null);

    return (
        <PageLeaveAnimationContext.Provider
            value={{
                pageLeaveAnimation,
                setPageLeaveAnimation
            }}
        >
            <Component {...pageProps} />
            <Common />
        </PageLeaveAnimationContext.Provider>
    );
}

export default MyApp;
