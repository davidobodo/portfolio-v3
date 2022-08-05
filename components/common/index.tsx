import { Contact, RouteTransitionOverlay, ScrollToTop } from "../index";
import { usePageTransition } from "#/hooks";
import { useRouter } from "next/router";

export default function Common() {
	const { layersWrapperRef, onRouteChange, loadingTextsRef } = usePageTransition();
	const router = useRouter();
	return (
		<>
			{router.pathname !== "/projects/[id]" && <Contact onRouteChange={onRouteChange} />}
			<RouteTransitionOverlay layersWrapperRef={layersWrapperRef} loadingTextsRef={loadingTextsRef} />
			<ScrollToTop />
		</>
	);
}
