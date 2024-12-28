import { UserProvider } from "./UserContext";
import UserCard from "./components/UserCard";

const UserList = ({ userIds }: { userIds: number[] }) => {
	return (
		<div>
			<h2>User List</h2>
			{userIds.map((id) => (
				<UserCard
					key={id}
					userId={id}
				/>
			))}
		</div>
	);
};

const App = () => {
	const userIds = [1, 2]; // Replace with actual user IDs if available

	return (
		<UserProvider>
			<div>
				<h1>Main Page</h1>
				<UserList userIds={userIds} />
			</div>
		</UserProvider>
	);
};

export default App;
