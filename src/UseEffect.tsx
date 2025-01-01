import { useEffect, useState } from "react";

function UseEffect() {
	// const [data, setData] = useState([]);
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	// 			const result = await response.json();
	// 			setData(result);
	// 		} catch (error) {
	// 			console.error("Failed to fetch data", error);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	}

	// 	fetchData();
	// }, []);

	// if (loading) {
	// 	return <div>Loading...</div>;
	// }

	// return (
	// 	<ul>
	// 		{data.map((item) => (
	// 			<li key={item.id}>{item.name}</li>
	// 		))}
	// 	</ul>
	// );
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setCounter(5);
	}, []);
	return (
		<div className="App">
			<h1>{counter}</h1>
		</div>
	);
}

export default UseEffect;
