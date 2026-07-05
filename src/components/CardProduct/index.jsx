import { CartButton } from '../CartButton/index.jsx';
import { CardImage, Container } from './styled';

export function CardProduct({ product }) {
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong>{product.currencyValue}</strong>
			</div>
			<CartButton></CartButton>
		</Container>
	);
}
