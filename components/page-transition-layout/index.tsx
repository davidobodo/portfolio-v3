import { usePageTransitionsContext } from "#/context";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { useState } from "react";

export default function PageTransitionLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
	const [displayedChildren, setDisplayedChildren] = useState(children);
	const { exitAnimation } = usePageTransitionsContext();

	useIsomorphicLayoutEffect(() => {
		if (children !== displayedChildren) {
			if (exitAnimation.duration() === 0) {
				//No outro animation
				setDisplayedChildren(children);
			} else {
				exitAnimation.restart().then(() => {
					setDisplayedChildren(children);
				});
			}
		}
	}, [children]);

	return <div>{displayedChildren}</div>;
}
