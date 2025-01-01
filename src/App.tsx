import { useState } from "react";

const App = () => {
	const [name, setName] = useState<string>("");
	const [number, setNumber] = useState<number>(0);
	const [password, setPassword] = useState<string>("");
	return (
		<div>
			<form action="">
				<label htmlFor="name">name</label>
				<input
					id="name"
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="number">number</label>
				<input
					type="number"
					name=""
					id="number"
					placeholder="enter value"
					value={number}
					onChange={(e) => setNumber(parseInt(e.target.value))}
				/>
				<label htmlFor="password">password</label>
				<input
					id="password"
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default App;
