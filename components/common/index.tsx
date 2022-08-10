import { Contact, RouteTransitionOverlay, ScrollToTop, ProgressBar } from "../index";
import { usePageTransition } from "#/hooks";

export default function Common() {
	const { layersWrapperRef, onRouteChange, loadingTextsRef } = usePageTransition();
	return (
		<>
			<Contact onRouteChange={onRouteChange} />
			<RouteTransitionOverlay layersWrapperRef={layersWrapperRef} loadingTextsRef={loadingTextsRef} />
			<ScrollToTop />
			<ProgressBar />
		</>
	);
}
