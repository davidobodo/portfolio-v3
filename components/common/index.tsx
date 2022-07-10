import { Contact, RouteTransitionOverlay, Logo, Nav } from "../index";
import { usePageTransition } from "#/hooks";

export default function Common() {
    const { layersWrapperRef, noiseRef, onRouteChange, timeline } = usePageTransition();
    return (
        <div>
            {/* <Logo
                color="#fff"
                style={{
                    position: "fixed",
                    top: "4rem",
                    left: "5rem",
                    zIndex: 1003
                }}
            /> */}

            <Nav timeline={timeline} />
            <Contact onRouteChange={onRouteChange} />
            <RouteTransitionOverlay noiseRef={noiseRef} layersWrapperRef={layersWrapperRef} />
        </div>
    );
}
