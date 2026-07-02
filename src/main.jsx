import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from './routes';
import GlobalStyle from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
		<ToastContainer autoClose={2000} theme='colored' />
		<GlobalStyle />
	</StrictMode>,
);
