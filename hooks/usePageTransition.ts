import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { useInitialAppLoadContext } from "../state";
import { useRouter } from "next/router";
import { animPageLoaders } from "#/utils/animations";
const { showLoadingTexts, closeNoiseLayers, hideLoadingTexts } = animPageLoaders;

// const newPageLoader = new AnimPageLoaders();

export default function usePageTransition() {
	//------------------------------------------
	// GLOBAL HELPERS
	//------------------------------------------
	const router = useRouter();
	const { setInitialAppLoad, initialAppLoad } = useInitialAppLoadContext();

	//------------------------------------------
	// LOCAL STATE
	//------------------------------------------
	const [loadingTextsTl, setLoadingTextsTl] = useState<gsap.core.Timeline>();
	const [loadingTextsTimeout, setLoadingTextsTimeout] = useState<NodeJS.Timeout>();
	const [triggerLoadingTextsTl, setTriggerLoadingTextsTl] = useState(false);

	//------------------------------------------
	// REFS / REFERENCES
	//------------------------------------------
	const layersWrapperRef = useRef<HTMLDivElement>(null);
	const loadingTextsRef = useRef<HTMLDivElement>(null);
	const loadingTextsRefSelector = gsap.utils.selector(loadingTextsRef);

	/**
	 *
	 * @param path url user is going to
	 */
	const onRouteChange = (path: string) => {
		// If on the same page, simply scroll to top
		if (router.pathname === path) {
			window.scrollTo({
				behavior: "smooth",
				top: 0,
				left: 0,
			});
			return;
		}
		if (!initialAppLoad) {
			const layers = layersWrapperRef.current
				? layersWrapperRef.current
				: document.querySelector('[data-key="layers"]');

			if (layers) {
				const tl = closeNoiseLayers({ node: layers.children });
				tl.then(() => {
					// In case routing hasn't completed after sometime (i.e users network is slow), we would show some texts while we wait
					const id = setTimeout(() => {
						setTriggerLoadingTextsTl(true);
						if (loadingTextsRef.current) {
							const tl = showLoadingTexts(loadingTextsRef.current, loadingTextsRefSelector("span"));
							setLoadingTextsTl(tl);
						}
					}, 500);
					setLoadingTextsTimeout(id);
					router.push(path);
				});
			}
		} else {
			// Although this case should never be met
			router.push(path);
		}
	};

	// This effect would "really only" ever be used if users network is slow
	useEffect(() => {
		const aniEnd = () => {
			// If we successfully route before loading texts start showing then dont bother to even show the waiting texts
			if (loadingTextsTimeout) {
				clearTimeout(loadingTextsTimeout);
			}

			// If we were showing waiting texts
			if (triggerLoadingTextsTl) {
				setTriggerLoadingTextsTl(false);
				loadingTextsTl?.pause(); // Stop showing the texts

				if (loadingTextsRef.current) {
					hideLoadingTexts(loadingTextsRef.current);
				}
			}
		};

		router.events.on("routeChangeComplete", aniEnd);
		router.events.on("routeChangeError", aniEnd);

		return () => {
			router.events.off("routeChangeComplete", aniEnd);
			router.events.off("routeChangeError", aniEnd);
			if (loadingTextsTimeout) {
				clearTimeout(loadingTextsTimeout);
			}
		};
	}, [router, triggerLoadingTextsTl, loadingTextsTimeout]);

	// Register the page leave animation
	useEffect(() => {
		if (initialAppLoad && layersWrapperRef.current) {
			closeNoiseLayers({
				node: layersWrapperRef.current?.children,
			});
			setInitialAppLoad(false);
		}
	}, [initialAppLoad]);

	return {
		layersWrapperRef,
		onRouteChange,
		initialAppLoad,
		loadingTextsRef,
	};
}
