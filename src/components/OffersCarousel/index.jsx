import { useEffect, useState } from 'react';
import * as MultiCarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from 'react-router-dom';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../CardProduct';
import { Container, Title } from './styled';

const Carousel =
	MultiCarouselModule.default?.default ||
	MultiCarouselModule.default ||
	MultiCarouselModule.Carousel;

export function OfferCarousel() {
	const [offers, setOffers] = useState([]); // ⚠️ ver nota abaixo

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');

			const onlyOffer = data
				.filter((product) => product.offer)
				.map((product) => ({
					currencyValue: formatPrice(product.price),
					...product,
				}));

			setOffers(onlyOffer);
		}
		loadProducts();
	}, []);

	const responsive = {
		superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
		desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
		tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
		mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
	};

	return (
		<Container>
			<Title>OFERTA DO DIA</Title>
			<Carousel
				responsive={responsive}
				infinite={true}
				partialVisbile={false}
				itemClass='carousel-item'
			>
				{offers.map((product) => (
					<CardProduct key={product.id} product={product} />
				))}
			</Carousel>
		</Container>
	);
}
