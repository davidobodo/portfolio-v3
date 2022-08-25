import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export default function useDeviceOrientation() {
	function handleOrientationChange() {
		window.scroll({
			top: 0,
			left: 0,
		});
		window.location.reload();
	}
	useIsomorphicLayoutEffect(() => {
		// if (screen.orientation) {
		// 	screen.orientation.addEventListener("change", handleOrientationChange);
		// 	return () => {
		// 		screen.orientation.removeEventListener("change", handleOrientationChange);
		// 	};
		// } else {
		// 	//For ios device
		// 	window.addEventListener("orientationchange", handleOrientationChange);
		// 	return () => {
		// 		window.removeEventListener("orientationchange", handleOrientationChange);
		// 	};
		// }
	}, []);
}
