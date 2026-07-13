import Logo from '../../assets/logo.svg';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, Content, Title } from './styled';

export function Cart() {
	return (
		<Container>
			<Banner>
				<img src={Logo} alt='Logo DevBurger' />
			</Banner>
			<Title>Checkout - Pedido</Title>

			<Content>
				<CartItems />
				<CartResume />
			</Content>
		</Container>
	);
}
