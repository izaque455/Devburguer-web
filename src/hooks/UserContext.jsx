import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userInfor, setUserInfo] = useState({});

	const putUserData = (userInfor) => {
		setUserInfo(userInfor);

		localStorage.setItem('devBurguer:useData', JSON.stringify(userInfor));
	};

	const logout = () => {
		setUserInfo({});
		localStorage.removeItem('devBurguer:useData');
	};

	useEffect(() => {
		const userInforLocalStorage = localStorage.getItem('devBurguer:useData');

		if (userInforLocalStorage) {
			setUserInfo(JSON.parse(userInforLocalStorage));
		}
	}, []);

	return (
		<UserContext.Provider value={{ userInfor, putUserData, logout }}>
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
