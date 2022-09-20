import { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { events, registerEvent } from "#/utils/analytics/events";
import { useAnimationsContext } from "#/context";

type TView = "list" | "grid";

export default function useProjectsCurrentView({ defaultView }: { defaultView?: TView }) {
	const { innerWidth: windowInnerWidth } = useWindowSize();
	const [currentView, setCurrentView] = useState<TView>(defaultView ? defaultView : "grid");
	const handleSetCurrentView = (view: TView) => {
		setCurrentView(view);
		registerEvent(events.shared.homeAndProjects.toggleProjectsView({ projects_view: view }));
	};

	const { radialGradientAnimation, contactOpenerAnimation } = useAnimationsContext();

	const [firstInstanceLoad, setFirstInstanceLoad] = useState(true);

	// Anytime view changes refresh pin gradient animation
	useEffect(() => {
		if (!firstInstanceLoad) {
			radialGradientAnimation?.scrollTrigger?.refresh();
			contactOpenerAnimation?.scrollTrigger?.refresh();
		} else {
			setFirstInstanceLoad(false);
		}
	}, [currentView]);

	//Default desktop view
	useIsomorphicLayoutEffect(() => {
		if (windowInnerWidth > 1024 && !defaultView) {
			setCurrentView("list");
		}
	}, []);

	return {
		currentView,
		handleSetCurrentView,
	};
}
