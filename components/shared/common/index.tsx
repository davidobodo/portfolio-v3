import styles from "./styles.module.scss";
import { RouteTransitionOverlay, ScrollToTop, ProgressBar, PercentLoader } from "#/components";

export default function Common() {
	return (
		<>
			<PercentLoader />
			<ScreenBlocker />
			<RouteTransitionOverlay />
			<ScrollToTop />
			<ProgressBar />
		</>
	);
}

function ScreenBlocker() {
	return (
		<div className={styles.sizeblocker}>
			<p>
				Please use a screen size of <span>&apos;375px or above&apos;</span> to view app
			</p>
		</div>
	);
}
