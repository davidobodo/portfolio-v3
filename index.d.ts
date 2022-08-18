declare global {
	interface Window {
		gtag: (type: string, name: string, config?: Record<string, string>) => {};
	}
}

export {};
