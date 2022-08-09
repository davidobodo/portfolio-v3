import styles from "./styles.module.scss";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { RefObject, useRef } from "react";
import { FilterIcon } from "#/components/icons";
import { projectAnimations } from "#/utils/animations";
const { animateFilterButton } = projectAnimations;
export default function Filter({ onClick }: { onClick: () => void; displayTriggerNode?: RefObject<HTMLDivElement> }) {
	const btnRef = useRef<HTMLButtonElement>(null);

	useIsomorphicLayoutEffect(() => {
		const tl = animateFilterButton({
			button: btnRef.current as HTMLButtonElement,
			trigger: document.querySelector("[data-key='projects']") as HTMLDivElement,
		});
		return () => {
			tl.scrollTrigger?.kill();
		};
	}, []);
	return (
		<div className={styles.container}>
			<button className={styles.btnFilter} onClick={onClick} ref={btnRef} data-key="open-filter-btn">
				<FilterIcon />
			</button>
		</div>
	);
}
