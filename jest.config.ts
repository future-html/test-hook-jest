export {};
// import fetchMock from "jest-fetch-mock";
// fetchMock.enableMocks();

// import type { Config } from "@jest/types";
// import { config } from "process";

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

	// config: {
	// 	preset: "ts-jest", // ใช้ ts-jest สำหรับ TypeScript
	// 	testEnvironment: "node",
	// },

	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // add the setup file after install jest
};
