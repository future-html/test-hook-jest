import React, { useState, useEffect, useCallback } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// Memoize the fetch function to avoid re-creation on each render
	const fetchUsers = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error("Failed to fetch users");
			}
			const data = await response.json();
			setUsers(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	// Fetch data when the component mounts
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	// Filter users when the search term or user list changes
	useEffect(() => {
		const results = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
		setFilteredUsers(results);
	}, [searchTerm, users]);

	return (
		<div>
			<h1>User Search</h1>

			{error && <p style={{ color: "red" }}>{error}</p>}
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<input
						type="text"
						placeholder="Search users by name"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<ul>
						{filteredUsers.map((user) => (
							<li key={user.id}>
								{user.name} - {user.email}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
}
