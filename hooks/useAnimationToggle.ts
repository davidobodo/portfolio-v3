import { useEffect } from "react";
import { useMotionPreference } from "#/context";

export default function useAnimationToggle() {
	const { preference } = useMotionPreference();

	useEffect(() => {
		// Add a class to the body to indicate animation state
		if (preference === "disabled") {
			document.body.classList.add("animations-disabled");
		} else {
			document.body.classList.remove("animations-disabled");
		}
	}, [preference]);

	return preference === "enabled";
}
