import { RouteTransitionOverlay, ScrollToTop, ProgressBar } from "../index";
import styles from "./styles.module.scss";
export default function Common() {
	return (
		<>
			<ScreenBlocker />
			<RouteTransitionOverlay />
			<ScrollToTop />
			<ProgressBar />
		</>
	);
}

function ScreenBlocker() {
	return (
		<div className={styles.blocker}>
			<p>
				Please use a screen size of <span>&apos;375px or above&apos;</span> to view app
			</p>
		</div>
	);
}
