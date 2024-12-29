export {};
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	transform: {
		".(ts|tsx)": "ts-jest",
	},

	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		// "\\.svg$": "<rootDir>/__mocks__/fileMock.js",
	},

	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/coverage",
		"package.json",
		"package-lock.json",
		"reportWebVitals.ts",
		"setupTests.ts",
		"index.tsx",
	],

	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
