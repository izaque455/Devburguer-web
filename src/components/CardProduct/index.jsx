import { useCart } from '../../hooks/CartContext.jsx';
import { CartButton } from '../CartButton/index.jsx';
import { CardImage, Container } from './styled';

export function CardProduct({ product }) {
	const { putProductInCart } = useCart();
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong>{product.currencyValue}</strong>
			</div>
			<CartButton onClick={() => putProductInCart(product)}></CartButton>
		</Container>
	);
}
