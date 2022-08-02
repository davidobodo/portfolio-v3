import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./index";

export default function useSetBannerHeight({
	windowInnerHeight,
	windowInnerWidth,
}: {
	windowInnerHeight: number;
	windowInnerWidth: number;
}) {
	const [bannerHeight, setBannerHeight] = useState<number>();
	const [device, setDevice] = useState("");

	useIsomorphicLayoutEffect(() => {
		// Detect users device
		import("detect.js").then((detectModule) => {
			const ua = detectModule.default.parse(navigator.userAgent);
			setDevice(ua.device.type);
		});

		// Irrespective of users device we would set the banner height once
		if (windowInnerHeight) {
			setBannerHeight(windowInnerHeight);
		}
	}, []);

	// If user is on a desktop, then change the banner height when the window resizes
	useIsomorphicLayoutEffect(() => {
		if (device === "Desktop" && windowInnerHeight) {
			setBannerHeight(windowInnerHeight);
		}
	}, [device, windowInnerHeight, windowInnerWidth]);

	return {
		bannerHeight,
		device,
	};
}
