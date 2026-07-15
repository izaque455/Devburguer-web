import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext.jsx';
import { api } from '../../services/api.js';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import { Container } from './styled';

export function CartResume() {
	const { cartProducts, clearCart } = useCart();

	const [finalPrice, setFinalPrice] = useState(0);
	const deliveryTax = cartProducts.length === 0 ? 0 : 500;

	const navigate = useNavigate();

	useEffect(() => {
		const sumAllItems = cartProducts.reduce((acc, current) => {
			return current.price * current.quantity + acc;
		}, 0);

		setFinalPrice(sumAllItems);
	}, [cartProducts]);
	const submitOrder = async () => {
		const products = cartProducts.map((product) => {
			return {
				id: product.id,
				quantity: product.quantity,
			};
		});

		try {
			const { status } = await api.post(
				'/orders',
				{ products },
				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				setTimeout(() => {
					navigate('/');
				}, 2100);
				clearCart();
				toast.success('Pedido Realizado Com Sucesso! 😀');
			} else if (status === 400 || status === 409) {
				toast.error('Falha ao Realizar o Seu Pedido');
			} else {
				throw new Error();
			}
		} catch (error) {
			toast.error('😭 Falha no Nosso Sistema, Tente Novamente.');
		}
	};

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
			<Button onClick={submitOrder}>FinalizarPedido</Button>
		</div>
	);
}
