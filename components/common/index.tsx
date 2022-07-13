import { Contact, RouteTransitionOverlay, ScrollToTop } from "../index";
import { usePageTransition } from "#/hooks";

export default function Common() {
    const { layersWrapperRef, onRouteChange } = usePageTransition();
    return (
        <div>
            <Contact onRouteChange={onRouteChange} />
            <RouteTransitionOverlay layersWrapperRef={layersWrapperRef} />
            <ScrollToTop />
        </div>
    );
}
