import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import App from "../App";
import { fakeUsers } from "../utils/mockData";
import { UserProvider } from "../UserContext";
import UserCard from "../components/UserCard";
import { waitFor } from "@testing-library/react";
import { act } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";



describe("testing main page", () => {
	let rootElement: HTMLElement;
	beforeEach(() => {
		// Set up a mock DOM element
		rootElement = document.createElement("div");
		rootElement.id = "root";
		document.body.appendChild(rootElement);
		// reset fetchMock
		fetchMock.resetMocks();
	});

	afterEach(() => {
		// Clean up after the test
		if (rootElement) {
			document.body.removeChild(rootElement);
		}
	});
	// test main page

	test("should render App component inside root element", () => {
		// Act: Import the main file (executes the code)

		const mockRender = jest.fn();

		act(() => {
			require("../main");
		});

		// Assert: Verify that createRoot was called with the root element
		// expect(createRoot).toHaveBeenCalledWith(rootElement);
		// Assert: Ensure render method of the root is called with <App />
		expect(createRoot(rootElement).render).toHaveBeenCalledWith(
			<App /> // Can also test for specific JSX structure if needed
		);
	});

	// test("should log an error if root element is missing", () => {
	// 	// Arrange: Remove the root element
	// 	document.body.removeChild(rootElement!);
	// 	console.error = jest.fn();

	// 	// Act: Import the main file (executes the code)
	// 	require("../main");

	// 	// Assert: Verify that an error is logged
	// 	expect(console.error).toHaveBeenCalledWith("Root element not found.");
	// });

	test("renders UserList with correct user IDs", () => {
		render(<App />);
		expect(screen.getByText("User List")).toBeInTheDocument;
		expect(screen.getByText("Main Page")).toBeInTheDocument;
	});

	test("render mocked users", async () => {
		fetchMock.mockResponse(JSON.stringify(fakeUsers));

		render(
			<UserProvider>
				<UserCard userId={fakeUsers[0].id} />
			</UserProvider>
		);
		const name = await screen.findByText((content) => content.includes(fakeUsers[0].name));
		// console.log(name["textContent"], "name");
		expect(name).toBeInTheDocument;
		const waitForFunction = await waitFor(() => expect(screen.queryByText("Loading...")));
		waitForFunction.not.toBeInTheDocument;

		// fakeUsers has 10 data
	});

	test("should render user details correctly", async () => {
		fetchMock.mockResponseOnce(JSON.stringify(fakeUsers));

		render(
			<UserProvider>
				<UserCard userId={1} />
			</UserProvider>
		);

		// render user card ==> name and email displayed ==> correct
		//

		const name = await screen.findByText(fakeUsers[0].name);
		console.assert(name);

		expect(name).toBeInTheDocument;
		// expect(screen.getByText(`Email: ${fakeUsers[0].email}`)).toBeInTheDocument;
	});
});
