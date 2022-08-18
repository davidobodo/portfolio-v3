import gsap from "gsap";
import { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { events, registerEvent } from "#/utils/analytics/events";
type TView = "list" | "grid";

export default function useProjectsCurrentView() {
	const { innerWidth: windowInnerWidth } = useWindowSize();
	const [currentView, setCurrentView] = useState<TView>("list");
	const handleSetCurrentView = (view: TView) => {
		setCurrentView(view);
		registerEvent(events.shared.homeAndProjects.toggleProjectsView({ projects_view: view }));
	};

	const [firstInstanceLoad, setFirstInstanceLoad] = useState(true);

	// Anytime view changes refresh scroll trigger
	useEffect(() => {
		if (!firstInstanceLoad) {
			ScrollTrigger.refresh();
			gsap.to(window, { scrollTo: "#projects-list" });
		} else {
			setFirstInstanceLoad(false);
		}
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
