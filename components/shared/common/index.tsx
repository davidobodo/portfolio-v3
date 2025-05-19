import styles from "./styles.module.scss";
import { RouteTransitionOverlay, ScrollToTop, ProgressBar, Preloader, MotionPreferenceModal } from "#/components";
import useMotionPreferenceModal from "#/hooks/useMotionPreferenceModal";

export default function Common() {
	const { showModal, handlePreferenceSelect } = useMotionPreferenceModal();

	console.log(showModal, "SHOW MODAL");

	return (
		<>
			<Preloader />
			<ScreenBlocker />
			<RouteTransitionOverlay />
			<ScrollToTop />
			<ProgressBar />
			<MotionPreferenceModal isOpen={showModal} onSelect={handlePreferenceSelect} />
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
