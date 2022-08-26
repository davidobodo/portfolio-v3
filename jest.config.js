// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
	verbose: true,
	moduleNameMapper: {
		"^#/(.*)$": "<rootDir>/$1",
	},
};

module.exports = createJestConfig(customJestConfig);
