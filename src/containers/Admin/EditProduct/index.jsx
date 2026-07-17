import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';
import { standardTheme } from '../../../styles/themes/starndard';
import {
	Container,
	Form,
	ImagePreview,
	Input,
	InputGroup,
	Label,
	PreviewBox,
	SubmitButton,
} from './styled';

export function EditProduct() {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const [product, setProduct] = useState(location.state?.product || null);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [offer, setOffer] = useState(false);
	const [imageFile, setImageFile] = useState(null);
	const [imagePreview, setImagePreview] = useState('');
	const [loading, setLoading] = useState(!location.state?.product);

	useEffect(() => {
		async function loadProduct() {
			if (location.state?.product) {
				setProduct(location.state.product);
				setName(location.state.product.name || '');
				setPrice(
					location.state.product.price
						? location.state.product.price / 100
						: '',
				);
				setOffer(Boolean(location.state.product.offer));
				setImagePreview(location.state.product.url || '');
				setLoading(false);
				return;
			}

			if (!id) {
				setLoading(false);
				return;
			}

			try {
				const { data } = await api.get(`/products/${id}`);
				setProduct(data);
				setName(data.name || '');
				setPrice(data.price ? data.price / 100 : '');
				setOffer(Boolean(data.offer));
				setImagePreview(data.url || '');
			} catch (error) {
				console.error('Erro ao carregar produto:', error);
			} finally {
				setLoading(false);
			}
		}

		loadProduct();
	}, [id, location.state]);

	function handleImageChange(event) {
		const file = event.target.files?.[0];
		if (!file) {
			return;
		}

		setImageFile(file);
		setImagePreview(URL.createObjectURL(file));
	}

	async function handleSubmit(event) {
		event.preventDefault();

		if (!product?.id) {
			return;
		}

		const formData = new FormData();
		formData.append('name', name);
		formData.append('price', String(Number(price) * 100));
		formData.append('offer', String(offer));
		formData.append(
			'category_id',
			String(product.category_id || product.category?.id || ''),
		);

		if (imageFile) {
			formData.append('file', imageFile);
		}

		await toast.promise(
			api.put(`/products/${product.id}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
			{
				pending: 'Atualizando produto...',
				success: 'Produto atualizado com sucesso!',
				error: 'Falha ao atualizar o produto.',
			},
		);

		navigate('/admin/produtos');
	}

	if (loading) {
		return <Container>Carregando produto...</Container>;
	}

	if (!product) {
		return <Container>Produto não encontrado.</Container>;
	}

	return (
		<Container>
			<h2>Editar produto</h2>
			<Form onSubmit={handleSubmit}>
				<InputGroup>
					<Label>Nome</Label>
					<Input
						value={name}
						onChange={(event) => setName(event.target.value)}
						required
					/>
				</InputGroup>

				<InputGroup>
					<Label>Preço</Label>
					<Input
						type='number'
						step='0.01'
						min='0'
						value={price}
						onChange={(event) => setPrice(event.target.value)}
						required
					/>
				</InputGroup>

				<InputGroup>
					<Label>
						<input
							type='checkbox'
							checked={offer}
							onChange={() => setOffer((current) => !current)}
						/>
						Ofertar produto
					</Label>
				</InputGroup>

				<InputGroup>
					<Label>Imagem atual</Label>
					{imagePreview ? (
						<ImagePreview src={imagePreview} alt={product.name} />
					) : (
						<PreviewBox>Sem imagem</PreviewBox>
					)}
				</InputGroup>

				<InputGroup>
					<Label>Escolher nova imagem</Label>
					<Input
						type='file'
						accept='image/png, image/jpeg'
						onChange={handleImageChange}
					/>
				</InputGroup>

				<SubmitButton
					type='submit'
					style={{ backgroundColor: standardTheme.purple }}
				>
					Salvar alterações
				</SubmitButton>
			</Form>
		</Container>
	);
}
