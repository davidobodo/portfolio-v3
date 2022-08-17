import { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type TView = "list" | "grid";

export default function useProjectsCurrentView() {
	const { innerWidth: windowInnerWidth } = useWindowSize();
	const [currentView, setCurrentView] = useState<TView>("list");
	const handleSetCurrentView = (view: TView) => {
		const elem = document.querySelector("[data-key='projects']");
		if (elem) {
			elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		}
		setCurrentView(view);
	};

	// Anytime view changes refresh scroll trigger
	useEffect(() => {
		ScrollTrigger.refresh();
	}, [currentView]);

	useIsomorphicLayoutEffect(() => {
		if (windowInnerWidth < 768) {
			setCurrentView("grid");
		} else {
			setCurrentView("list");
		}
	}, []);

	return {
		currentView,
		handleSetCurrentView,
	};
}
