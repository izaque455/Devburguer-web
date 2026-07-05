import Cart from '../../assets/cart.png';
import { ContainerButton } from './styled';

export function CartButton({ ...props }) {
	return (
		<ContainerButton {...props}>
			<img src={Cart} alt='Carrinho de Compras' />
		</ContainerButton>
	);
}
