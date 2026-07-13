import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext.jsx';
import { api } from '../../services/api.js';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import { Container } from './styled';

export function CartResume() {
	const [finalPrice, setFinalPrice] = useState(0);
	const [deliveryTax] = useState(500);

	const { cartProducts, clearCart } = useCart();

	useEffect(() => {
		const sumAllItems = cartProducts.reduce((acc, current) => {
			return current.price * current.quantity + acc;
		}, 0);

		setFinalPrice(sumAllItems);
	}, [cartProducts]);

	return (
		<div>
			<Container>
				<div className='container-top'>
					<h2 className='title'>Resumo do Pedido</h2>
					<p className='items'>Itens</p>
					<p className='items-price'>{formatPrice(finalPrice)}</p>
					<p className='delivery-tax'>Taxa de Entrega</p>
					<p className='delivery-tax-price'>{formatPrice(deliveryTax)}</p>
				</div>
				<div className='container-bottom'>
					<p>Total</p>
					<p>{formatPrice(finalPrice + deliveryTax)}</p>
				</div>
			</Container>
			<Button>FinalizarPedido</Button>
		</div>
	);
}
