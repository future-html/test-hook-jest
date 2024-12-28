import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
// jest.setup.ts or at the top of your test file
global.fetch = jest.fn(
	() =>
		Promise.resolve({
			ok: true,
			json: () => Promise.resolve([{ id: 1, name: "John Doe", email: "john@example.com" }]),
		}) as unknown as Promise<Response> // Cast the mock as a Promise<Response>
);

describe("UserSearch Component", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test("displays fetched user data", async () => {
		(global.fetch as jest.Mock).mockImplementationOnce(() =>
			Promise.resolve({
				ok: true,
				json: () => Promise.resolve([{ id: 1, name: "John Doe", email: "john@example.com" }]),
			})
		);

		render(<App />);

		// Wait for the "John Doe" element to appear in the DOM
		await waitFor(() => expect(screen.getByText(/john doe/i)).toBeInTheDocument());

		// Confirm the fetch was called
		expect(fetch).toHaveBeenCalledTimes(1);
	});

	test("renders loading state and fetches users", async () => {
		(global.fetch as jest.Mock).mockImplementationOnce(() =>
			Promise.resolve({
				ok: true,
				json: () => Promise.resolve([{ id: 1, name: "John Doe", email: "john@example.com" }]),
			})
		);

		render(<App />);

		// Assert loading state first
		expect(screen.getByText(/loading.../i)).toBeInTheDocument();

		// Wait for "John Doe" to appear in the DOM
		await waitFor(() => expect(screen.getByText(/john doe/i)).toBeInTheDocument());

		// Confirm fetch call
		expect(fetch).toHaveBeenCalledTimes(1);
	});

	test("filters users based on search term", async () => {
		render(<App />);
		await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

		await waitFor(() => {});

		const inputElement = screen.getByPlaceholderText(/Search users by name/i);
		expect(inputElement).toBeInTheDocument();

		// Simulate typing and check filtered results
		fireEvent.change(screen.getByPlaceholderText(/Search users by name/i), { target: { value: "John" } });
		expect(screen.getByText(/john doe/i)).toBeInTheDocument();
	});

	test("handles fetch error gracefully", async () => {
		(global.fetch as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error("Fetch error")));

		render(<App />);
		await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
		expect(screen.getByText(/fetch error/i)).toBeInTheDocument();
	});
});
