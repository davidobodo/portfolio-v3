import { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { events, registerEvent } from "#/utils/analytics/events";
import { usePageTransitionsContext } from "#/context";

type TView = "list" | "grid";

export default function useProjectsCurrentView() {
	const { innerWidth: windowInnerWidth } = useWindowSize();
	const [currentView, setCurrentView] = useState<TView>("grid");
	const handleSetCurrentView = (view: TView) => {
		setCurrentView(view);
		registerEvent(events.shared.homeAndProjects.toggleProjectsView({ projects_view: view }));
	};

	const { radialGradientAnimation } = usePageTransitionsContext();

	const [firstInstanceLoad, setFirstInstanceLoad] = useState(true);

	// Anytime view changes refresh pin gradient animation
	useEffect(() => {
		if (!firstInstanceLoad) {
			radialGradientAnimation?.scrollTrigger?.refresh();
		} else {
			setFirstInstanceLoad(false);
		}
	}, [currentView]);

	//Default desktop view
	useIsomorphicLayoutEffect(() => {
		if (windowInnerWidth > 1024) {
			setCurrentView("list");
		}
	}, []);

	return {
		currentView,
		handleSetCurrentView,
	};
}
