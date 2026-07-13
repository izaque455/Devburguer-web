import { ShoppingCartIcon, UserCircleIcon } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';
import {
	Container,
	Content,
	HeaderLink,
	LinkConteiner,
	Logout,
	Navigation,
	Options,
	Profile,
} from './styled';

export function Header() {
	const navigate = useNavigate();

	const { pathname } = useResolvedPath();
	const { logout, userInfor } = useUser();

	function logoutUser() {
		logout();
		navigate('/login');
	}
	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink to='/' $isActive={pathname === '/'}>
							Home
						</HeaderLink>
						<hr></hr>
						<HeaderLink to='cardapio' $isActive={pathname === '/cardapio'}>
							Cardapio
						</HeaderLink>
					</div>
				</Navigation>
				<Options>
					<Profile>
						<UserCircleIcon color='#fff' size={24} />
						<div>
							<p>
								Olá, <span>{userInfor?.name}</span>
							</p>
							<Logout onClick={logoutUser}>Sair</Logout>
						</div>
					</Profile>
					<LinkConteiner>
						<ShoppingCartIcon to='/carrinho' color='#fff' size={24} />
						<HeaderLink to='/carrinho'>Carrinho</HeaderLink>
					</LinkConteiner>
				</Options>
			</Content>
		</Container>
	);
}

