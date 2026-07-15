import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import AppProvider from './hooks';
import { Router } from './routes';
import GlobalStyle from './styles/globalStyles';
import { standardTheme } from './styles/themes/starndard';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={standardTheme}>
			<AppProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
				<ToastContainer autoClose={3000} theme='colored' />
				<GlobalStyle />
			</AppProvider>
		</ThemeProvider>
	</StrictMode>,
);
