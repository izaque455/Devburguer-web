import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import { Container } from './styled';

export function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadProducts() {
			try {
				const { data } = await api.get('/products');
				setProducts(Array.isArray(data) ? data : data.products || []);
			} catch (error) {
				console.error('Erro ao carregar produtos:', error);
				setProducts([]);
			} finally {
				setLoading(false);
			}
		}

		loadProducts();
	}, []);

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='products table'>
					<TableHead>
						<TableRow>
							<TableCell>Imagem</TableCell>
							<TableCell>Produto</TableCell>
							<TableCell align='right'>Categoria</TableCell>
							<TableCell align='right'>Preço</TableCell>
							<TableCell align='right'>Oferta</TableCell>
							<TableCell align='right'>Editar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{loading ? (
							<TableRow>
								<TableCell colSpan={6}>Carregando produtos...</TableCell>
							</TableRow>
						) : products.length === 0 ? (
							<TableRow>
								<TableCell colSpan={6}>Nenhum produto encontrado.</TableCell>
							</TableRow>
						) : (
							products.map((product) => (
								<TableRow
									key={product.id || product.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell>
										<img
											src={product.url || 'https://via.placeholder.com/80'}
											alt={product.name}
											style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 8 }}
										/>
									</TableCell>
									<TableCell component='th' scope='row'>
										{product.name}
									</TableCell>
									<TableCell align='right'>
										{product.category?.name || product.category || '—'}
									</TableCell>
									<TableCell align='right'>
										{formatPrice(product.price || 0)}
									</TableCell>
									<TableCell align='right'>
										{product.offer ? 'Sim' : 'Não'}
									</TableCell>
									<TableCell align='right'>
										<IconButton
											onClick={() => navigate(`/admin/editar-produto/${product.id}`, { state: { product } })}
											aria-label={`Editar ${product.name}`}
										>
											<EditIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
