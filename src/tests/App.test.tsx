import App from "../App";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

const setup = () => {
	const utils = render(<App />);
	const input = screen.getByLabelText("name") as HTMLInputElement; // Explicitly cast to HTMLInputElement
	return {
		input,
		...utils,
	};
};

describe("App", () => {
	test("renders the App component and checks for input with placeholder 'name'", () => {
		render(<App />);

		// Query for the input element by placeholder text
		const inputNode = screen.queryByPlaceholderText("name");

		// Log the node (optional, for debugging)
		console.log(inputNode);

		// Assert that the input is in the document
		expect(inputNode).toBeInTheDocument();
	});

	test("name input is clear", () => {
		const { input } = setup();

		// Simulate typing into the input
		fireEvent.change(input, { target: { value: "John Doe" } });

		// Verify the input value is updated
		expect(input.value).toBe("John Doe");

		// Simulate clearing the input
		fireEvent.change(input, { target: { value: "" } });

		// Verify the input value is cleared
		expect(input.value).toBe("");
	});
});
