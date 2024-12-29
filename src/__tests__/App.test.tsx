import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import "jest-svg-transformer";
import { ReactComponent } from "../App";
describe("App", () => {
	it("renders learn react link", () => {
		render(<App />);
		const linkElement = screen.getByText(/count is/i);
		expect(linkElement).toBeInTheDocument();
	});
});

describe("new circle", () => {
	it("renders learn react link", () => {
		render(
			<ReactComponent
				Title="React"
				Logo={
					"https://images.unsplash.com/photo-1733234976396-87cf34ae6038?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
			></ReactComponent> // <img src={ReactLogo} alt=""/>
		);
	});
});

// const userElement = await screen.findByText(/alice/i);
// expect(userElement).toBeInTheDocument();
