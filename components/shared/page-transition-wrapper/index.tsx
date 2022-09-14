import { useAnimationsContext } from "#/context";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { useState } from "react";
export default function PageTransitionLayout({
	children,
	path,
}: {
	children: JSX.Element | JSX.Element[];
	path: string;
}) {
	const [displayedChildren, setDisplayedChildren] = useState(children);
	const [currentPath, setCurrentPath] = useState(path);
	const { exitAnimation } = useAnimationsContext();

	useIsomorphicLayoutEffect(() => {
		if (children !== displayedChildren) {
			if (exitAnimation.duration() === 0) {
				//No outro animation
				setDisplayedChildren(children);
			} else {
				// User is linking to the same page
				if (currentPath === path) {
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
					setDisplayedChildren(children);
				} else {
					exitAnimation.restart().then(() => {
						setDisplayedChildren(children);
						setCurrentPath(path);
					});
				}
			}
		}
	}, [children, path]);

	return <div>{displayedChildren}</div>;
}
