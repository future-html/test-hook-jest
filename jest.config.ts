export {};
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest", // Use ts-jest for TypeScript files
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

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
