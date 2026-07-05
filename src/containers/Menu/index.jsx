import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import { CardProduct } from '../../components/CardProduct/index.jsx';
import { api } from '../../services/api.js';
import { formatPrice } from '../../utils/formatPrice.js';
import {
	Banner,
	CategoryButton,
	CategoryMenu,
	Container,
	ProductsContainer,
} from './styled.js';

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filterRedPorducts, setFilterRedPorducts] = useState([]);

	const navigate = useNavigate();

	const { search } = useLocation();

	const queryParams = new URLSearchParams(search);

	const [activeCategory, setActiveCategory] = useState(() => {
		const categoryId = +queryParams.get('categoria');

		if (categoryId) {
			return categoryId;
		}
		return 0;
	});

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			const newCategory = [{ id: 0, name: 'Todos' }, ...data];

			setCategories(newCategory);
		}

		async function loadProducts() {
			const { data } = await api.get('/products');

			const newProducts = data.map((product) => ({
				currencyValue: formatPrice(product.price),
				...product,
			}));

			setProducts(newProducts);
		}

		loadCategories();
		loadProducts();
	}, []);

	useEffect(() => {
		if (activeCategory === 0) {
			setFilterRedPorducts(products);
		} else {
			const newFilterRedProducts = products.filter(
				(product) => product.category_id === activeCategory,
			);
			setFilterRedPorducts(newFilterRedProducts);
		}
	}, [products, activeCategory]);

	return (
		<Container>
			<Banner>
				<button
					type='button'
					onClick={() => navigate({ pathname: '/' })}
					aria-label='Voltar'
				>
					<img src={logo} alt='' />
				</button>
				<h1>
					O MELHOR
					<br />
					HABURGUER
					<br />
					ESTÁ AQUI!
					<span>Esse Cardápio Está Irresistível!</span>
				</h1>
			</Banner>
			<CategoryMenu>
				{categories.map((category) => (
					<CategoryButton
						$isActoveCategory={category.id === activeCategory}
						key={category.id}
						onClick={() => {
							navigate(
								{
									pathname: '/cardapio',
									search: `?categoria=${category.id}`,
								},
								{
									replace: true,
								},
							);
							setActiveCategory(category.id);
						}}
					>
						{category.name}
					</CategoryButton>
				))}
			</CategoryMenu>
			<ProductsContainer>
				{filterRedPorducts.map((product) => (
					<CardProduct product={product} key={product.id} />
				))}
			</ProductsContainer>
		</Container>
	);
}
