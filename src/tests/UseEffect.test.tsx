import React from "react";
import UseEffect from "../UseEffect";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("App Component", () => {
	it("renders the counter value set by the useEffect hook", () => {
		render(<UseEffect />);

		// Assuming the counter is displayed in an h1 element
		const counterElement = screen.getByRole("heading", { level: 1 });
		expect(counterElement).toHaveTextContent("5");
	});
});
