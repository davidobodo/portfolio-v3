import styles from "./styles.module.scss";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { RefObject, useRef } from "react";

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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#fff"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
				</svg>
			</button>
		</div>
	);
}
