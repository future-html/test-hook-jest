import React, { createContext, useContext, useState } from "react";

// Define the type for the UserContext
type UserContextType = {
	user: { name: string; email: string };
	fetchUser: (id: number) => Promise<void>;
};

// Create the context with an initial default value
const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<{ name: string; email: string }>({ name: "", email: "" });

	// Define the function that fetches user data
	const fetchUser = async (id: number) => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		const userData = await response.json();
		setUser(userData);
	};

	return <UserContext.Provider value={{ user, fetchUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
	// Use the context and ensure it is not null
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};
