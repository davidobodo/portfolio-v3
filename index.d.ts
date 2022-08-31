import { ReducerAction } from "react";

declare global {
	interface Window {
		gtag: (type: string, name: string, config?: Record<string, string>) => {};
		grecaptcha: {
			ready: (val: () => {}) => void;
			execute: (sitekey: string, options: Record<string, string>) => Promise<token>;
		};
		previousOrientation: string;
	}
}

export {};
