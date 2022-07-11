import { Contact, RouteTransitionOverlay } from "../index";
import { usePageTransition } from "#/hooks";

export default function Common() {
    const { layersWrapperRef, noiseRef, onRouteChange } = usePageTransition();
    return (
        <div>
            <Contact onRouteChange={onRouteChange} />
            <RouteTransitionOverlay noiseRef={noiseRef} layersWrapperRef={layersWrapperRef} />
        </div>
    );
}
