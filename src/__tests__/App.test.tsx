import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

global.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		json: () => Promise.resolve([{ id: 1, name: "John Doe", email: "john@example.com" }]),
	})
);

describe("UserSearch Component", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders loading state and fetches users", async () => {
		render(<App />);
		expect(screen.getByText(/loading.../i)).toBeInTheDocument;

		await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
		expect(screen.getByText(/john doe/i)).toBeInTheDocument;
	});

	test("filters users based on search term", async () => {
		render(<App />);
		await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

		fireEvent.change(screen.getByPlaceholderText(/search users by name/i), {
			target: { value: "John" },
		});
		expect(screen.getByText(/john doe/i)).toBeInTheDocument;
	});

	test("handles fetch error gracefully", async () => {
		fetch.mockImplementationOnce(() => Promise.reject(new Error("Fetch error")));

		render(<App />);
		await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
		expect(screen.getByText(/fetch error/i)).toBeInTheDocument;
	});
});
