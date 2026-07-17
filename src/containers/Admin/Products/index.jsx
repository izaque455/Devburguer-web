import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import {
	Breadcrumbs,
	Container,
	Header,
	ProductImage,
	SearchInput,
	SearchWrapper,
	StyledTable,
	StyledTableContainer,
	Title,
	TitleBar,
} from './styled';

export function Products() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadProducts() {
			try {
				const { data } = await api.get('/products');
				const productsData = Array.isArray(data) ? data : data.products || [];
				setProducts(productsData);
				setFilteredProducts(productsData);
			} catch (error) {
				console.error('Erro ao carregar produtos:', error);
				setProducts([]);
				setFilteredProducts([]);
			} finally {
				setLoading(false);
			}
		}

		loadProducts();
	}, []);

	useEffect(() => {
		const query = search.trim().toLowerCase();
		setFilteredProducts(
			products.filter(
				(product) =>
					product.name?.toLowerCase().includes(query) ||
					product.category?.name?.toLowerCase().includes(query) ||
					product.category?.toLowerCase().includes(query),
			),
		);
	}, [search, products]);

	return (
		<Container>
			<Header>
				<Breadcrumbs>Gerenciar &gt; Produtos &gt; Listar produtos</Breadcrumbs>
				<TitleBar>
					<Title>Listar produtos</Title>
					<SearchWrapper>
						<SearchInput
							value={search}
							onChange={(event) => setSearch(event.target.value)}
							placeholder='Pesquisar produto'
						/>
					</SearchWrapper>
				</TitleBar>
			</Header>

			<StyledTableContainer>
				<StyledTable>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Preço</th>
							<th>Produto em oferta</th>
							<th>Imagem do produto</th>
							<th>Editar</th>
						</tr>
					</thead>
					<tbody>
						{loading ? (
							<tr>
								<td colSpan={5}>Carregando produtos...</td>
							</tr>
						) : filteredProducts.length === 0 ? (
							<tr>
								<td colSpan={5}>Nenhum produto encontrado.</td>
							</tr>
						) : (
							filteredProducts.map((product) => (
								<tr key={product.id || product.name}>
									<td>{product.name}</td>
									<td>{formatPrice(product.price || 0)}</td>
									<td>{product.offer ? '✔️' : '—'}</td>
									<td>
										<ProductImage
											src={product.url || 'https://via.placeholder.com/100'}
											alt={product.name}
										/>
									</td>
									<td>
										<IconButton
											onClick={() =>
												navigate(`/admin/editar-produto/${product.id}`, {
													state: { product },
												})
											}
											aria-label={`Editar ${product.name}`}
										>
											<EditIcon />
										</IconButton>
									</td>
								</tr>
							))
						)}
					</tbody>
				</StyledTable>
			</StyledTableContainer>
		</Container>
	);
}
