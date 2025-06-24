import styles from "./styles.module.scss";
import { Ref } from "react";

export default function Excellence({
	containerRef,
	containerWidth,
}: {
	containerRef: Ref<HTMLDivElement>;
	containerWidth?: number;
}) {
	return (
		<>
			{/* Trigger Div */}
			<div ref={containerRef}>
				{/* Use this divs scrollwidth for the horizontal scroll */}
				<div className={styles.container} data-key="container-inner" style={{ width: containerWidth + "px" }}>
					<Text style={{ width: containerWidth + "px" }} />
					<BgImage />
				</div>
			</div>
		</>
	);
}

function Text({ style }: { style: Record<string, string | number> }) {
	return (
		// Set the width of the svg since svg is going to take 100%
		<div className={styles.textWrapper} data-key="text" style={{ ...style }}>
			{/* Center the svg  */}
			<div className={styles.textInner}>
				<svg viewBox="0 0 1225.0208 437.09163">
					<defs id="defs842" />
					<g transform="translate(162.30664,12.746755)">
						<path
							style={{ fill: "#000000", strokeWidth: "0.264583" }}
							d="M -162.30665,-12.746756 V 424.3449 H 1062.7141 V -12.746756 Z M 646.49049,175.62934 c 13.18099,0 23.2091,9.16577 24.08277,22.6229 h -11.16779 c -1.0636,-7.37434 -6.22952,-12.207 -12.91498,-12.207 -8.66071,0 -14.24461,7.95749 -14.24461,20.62303 0,12.83219 5.50819,20.74809 14.28285,20.74809 6.79942,0 11.69944,-4.37468 12.91498,-11.49904 h 11.16779 c -1.29151,13.41547 -10.67412,21.91494 -24.12101,21.91494 -15.95393,0 -25.94415,-11.70719 -25.94415,-31.12213 0,-19.37328 10.06619,-31.08079 25.94415,-31.08079 z m 284.66426,0 c 13.181,0 23.2091,9.16577 24.0828,22.6229 h -11.1678 c -1.0636,-7.37434 -6.2295,-12.207 -12.915,-12.207 -8.6607,0 -14.2446,7.95749 -14.2446,20.62303 0,12.83219 5.5077,20.74809 14.2823,20.74809 6.7994,0 11.7,-4.37468 12.9155,-11.49904 h 11.1678 c -1.2915,13.41547 -10.6741,21.91494 -24.121,21.91494 -15.9539,0 -25.9441,-11.70719 -25.9441,-31.12213 0,-19.37328 10.0661,-31.08079 25.9441,-31.08079 z m -403.97687,1.04179 h 36.31406 v 10.37405 h -24.84241 v 14.49834 h 23.43681 v 9.66607 h -23.43681 v 15.16549 h 24.84241 v 10.41538 h -36.31406 z m 41.78401,0 h 13.48497 l 11.62358,21.66483 h 0.30385 l 11.73779,-21.66483 h 12.80077 l -17.92914,29.91394 v 0.29145 l 17.70124,29.91394 h -13.0669 l -12.0034,-21.03954 h -0.30386 l -12.07936,21.03954 H 568.8482 l 17.39739,-30.12219 v -0.33332 z m 108.71481,0 h 36.31406 v 10.37405 h -24.84241 v 14.49834 h 23.43733 v 9.66607 h -23.43733 v 15.16549 h 24.84241 v 10.41538 H 677.6767 Z m 44.59521,0 h 11.47165 v 49.70395 h 23.96909 v 10.41538 h -35.44074 z m 42.23984,0 h 11.4716 v 49.70395 h 23.9691 v 10.41538 h -35.4407 z m 42.2403,0 h 36.314 v 10.37405 h -24.8424 v 14.49834 h 23.4368 v 9.66607 h -23.4368 v 15.16549 h 24.8424 v 10.41538 h -36.314 z m 44.5947,0 h 9.5725 l 25.6021,39.16299 h 0.3043 v -39.16299 h 10.9777 v 60.11933 h -9.4966 l -25.6403,-39.37124 h -0.3416 v 39.37124 h -10.9781 z m 110.9942,0 h 36.3141 v 10.37405 h -24.8424 v 14.49834 h 23.4368 v 9.66607 h -23.4368 v 15.16549 h 24.8424 v 10.41538 h -36.3141 z"
						/>
					</g>
				</svg>
			</div>
		</div>
	);
}

function BgImage() {
	return (
		<div className={styles.bgImage} data-key="image-wrapper">
			<div className={styles.frame} data-key="image-frame"></div>
		</div>
	);
}
