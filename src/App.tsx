import { useState } from "react";
// import ReactLogo from "./assets/react.svg";
// import ViteLogo from "./assets/vite.svg";
import "./App.css";

export function ReactComponent({ Title, Logo }: { Title: string; Logo: string }) {
	return (
		<div>
			<h1>{Title}</h1>
			<img
				src={Logo}
				alt=""
			/>
		</div>
	);
}
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a
					href="https://vite.dev"
					target="_blank"
				>
					{/* <ViteLogo></ViteLogo> */}
				</a>
				<a
					href="https://react.dev"
					target="_blank"
				>
					{/* <ReactComponent
						Title="React"
						Logo={ReactLogo}
					></ReactComponent> */}
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
