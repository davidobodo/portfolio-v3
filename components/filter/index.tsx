import styles from "./styles.module.scss";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { RefObject, useRef } from "react";
import { FilterIcon } from "#/components/icons";
export default function Filter({ onClick }: { onClick: () => void; displayTriggerNode?: RefObject<HTMLDivElement> }) {
	const btnRef = useRef(null);

	useIsomorphicLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector("[data-key='projects']"),
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart reverse complete reverse",
				// markers: true,
				// endTrigger: darkSectionRef.current,
				// markers: true,
				// onEnter: () => console.log("enter"),
				// onEnterBack: () => console.log("enter back"),
				// onLeave: () => console.log("leave"),
				// onLeaveBack: () => console.log("leave back"),
			},
		});

		tl.to(btnRef.current, {
			opacity: 1,
			visibility: "visible",
			x: 0,
			rotate: 0,
		});
	}, []);
	return (
		<div className={styles.container}>
			<button className={styles.btnFilter} onClick={onClick} ref={btnRef} data-key="open-filter-btn">
				<FilterIcon />
			</button>
		</div>
	);
}
