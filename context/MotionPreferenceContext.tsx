import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Types
export type MotionPreference = "enabled" | "disabled";

interface MotionPreferenceContextValue {
	preference: MotionPreference;
	setPreference: (pref: MotionPreference) => void;
}

const MotionPreferenceContext = createContext<MotionPreferenceContextValue | undefined>(undefined);

// Key for localStorage
const MOTION_PREF_KEY = "motion-preference";

export const MotionPreferenceProvider = ({ children }: { children: ReactNode }) => {
	const [preference, setPreferenceState] = useState<MotionPreference>("enabled");

	// Load preference from localStorage on mount
	useEffect(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem(MOTION_PREF_KEY) as MotionPreference | null;
			if (stored === "enabled" || stored === "disabled") {
				setPreferenceState(stored);
			}
		}
	}, []);

	// Save preference to localStorage
	const setPreference = (pref: MotionPreference) => {
		setPreferenceState(pref);
		if (typeof window !== "undefined") {
			localStorage.setItem(MOTION_PREF_KEY, pref);
		}
	};

	return (
		<MotionPreferenceContext.Provider value={{ preference, setPreference }}>{children}</MotionPreferenceContext.Provider>
	);
};

export const useMotionPreference = () => {
	const context = useContext(MotionPreferenceContext);
	if (!context) {
		throw new Error("useMotionPreference must be used within a MotionPreferenceProvider");
	}
	return context;
};
