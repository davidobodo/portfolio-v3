import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export default function useDeviceOrientation() {
	function handleOrientationChange(event: ScreenOrientationEventMap["change"]) {
		const target = event.target as ScreenOrientation;

		if (window.previousOrientation !== target.type) {
			window.scroll({
				top: 0,
				left: 0,
			});
			window.location.reload();
		}
		window.previousOrientation = target.type;
	}

	useIsomorphicLayoutEffect(() => {
		window.previousOrientation = window.screen.orientation.type;
		if (screen.orientation) {
			screen.orientation.addEventListener("change", handleOrientationChange);
			return () => {
				screen.orientation.removeEventListener("change", handleOrientationChange);
			};
		} else {
			if (typeof window !== "undefined") {
				//For ios device
				window.addEventListener("orientationchange", handleOrientationChange);
			}
			return () => {
				if (typeof window !== "undefined") {
					window.removeEventListener("orientationchange", handleOrientationChange);
				}
			};
		}
	}, []);
}
