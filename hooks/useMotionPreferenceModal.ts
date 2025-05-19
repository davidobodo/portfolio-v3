import { useState, useEffect } from "react";
import { useMotionPreference } from "#/context";

const HAS_VISITED_KEY = "has-visited-portfolio";

export default function useMotionPreferenceModal() {
	const [showModal, setShowModal] = useState(false);
	const { setPreference } = useMotionPreference();

	useEffect(() => {
		// Check if this is the user's first visit
		const hasVisited = localStorage.getItem(HAS_VISITED_KEY);

		if (!hasVisited) {
			setShowModal(true);
			localStorage.setItem(HAS_VISITED_KEY, "true");
		}
	}, []);

	const handlePreferenceSelect = (preference: "enabled" | "disabled") => {
		setPreference(preference);
		setShowModal(false);
	};

	return {
		showModal,
		handlePreferenceSelect,
	};
}
