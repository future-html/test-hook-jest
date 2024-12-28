import { useUserContext } from "../UserContext";
import { useState, useEffect } from "react";
const UserCard = ({ userId }: { userId: number }) => {
	const { user, fetchUser } = useUserContext();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// console.log(user, "user");

	useEffect(() => {
		const loadUser = async () => {
			try {
				setLoading(true);
				setError(null);
				await fetchUser(userId);
			} catch (err: any) {
				setError("Failed to fetch user");
			} finally {
				setLoading(false);
			}
		};
		loadUser();
	}, [userId]);

	useEffect(() => {
		// use effect must cover console.log/count
		console.log(`Loading state: ${loading}`);
		console.count("Loading state changes");
	}, [loading]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error fetching user: {error}</div>;
	if (!user) return <div>No user data available</div>;

	return (
		<div>
			<h1>{user.name}</h1>
			<p>Email: {user.email}</p>
		</div>
	);
};

export default UserCard;
