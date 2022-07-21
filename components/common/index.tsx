import { Contact, RouteTransitionOverlay, ScrollToTop, Noise } from "../index";
import { usePageTransition } from "#/hooks";
import { useRouter } from "next/router";

export default function Common() {
    const { layersWrapperRef, onRouteChange, loadingTextsRef } = usePageTransition();
    const router = useRouter();
    return (
        <div>
            {router.pathname !== "/projects/[id]" && <Contact onRouteChange={onRouteChange} />}
            <RouteTransitionOverlay layersWrapperRef={layersWrapperRef} loadingTextsRef={loadingTextsRef} />
            <ScrollToTop />
            <Noise />
        </div>
    );
}
