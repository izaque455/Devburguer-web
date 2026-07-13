import { useEffect, useState } from 'react';
import * as MultiCarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { CategoryButton, Container, ContainerItems, Title } from './styled';

const Carousel =
	MultiCarouselModule.default?.default ||
	MultiCarouselModule.default ||
	MultiCarouselModule.Carousel;

export function CategoryCarousel() {
	const [categories, setCategories] = useState([]); // ⚠️ ver nota abaixo

	const navigate = useNavigate();

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			setCategories(data);
		}
		loadCategories();
	}, []);

	const responsive = {
		superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
		desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
		tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
		mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
	};

	return (
		<Container>
			<Title>Categorias</Title>
			<Carousel
				responsive={responsive}
				infinite={true}
				partialVisbile={false}
				itemClass='carousel-item'
			>
				{categories.map((category) => (
					<ContainerItems key={category.id} imageUrl={category.url}>
						<CategoryButton
							onClick={() => {
								navigate({
									pathname: '/cardapio',
									search: `?categoria=${category.id}`,
								});
							}}
						>
							{' '}
							{category.name}{' '}
						</CategoryButton>
					</ContainerItems>
				))}
			</Carousel>
		</Container>
	);
}
