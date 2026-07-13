import { CartProvide } from './CartContext';
import { UserProvider } from './UserContext';

const AppProvider = ({ children }) => {
	return (
		<UserProvider>
			<CartProvide>{children}</CartProvide>
		</UserProvider>
	);
};

export default AppProvider;
