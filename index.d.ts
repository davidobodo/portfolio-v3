import { ReducerAction } from "react";

declare global {
	interface Window {
		gtag: (type: string, name: string, config?: Record<string, string>) => {};
		grecaptcha: {
			ready: (val: () => {}) => { isHuman: boolean; message: string };
			execute: (sitekey: string, options: Record<string, string>) => Promise<token>;
		};
	}
}

export {};
