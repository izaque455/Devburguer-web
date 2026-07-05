import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userInfor, setUserInfo] = useState({ id: 1, name: 'Izaque' });

	return (
		<UserContext.Provider value={{ userInfor }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be a valid context');
	}

	return context;
};
