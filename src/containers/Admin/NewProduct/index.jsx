import { yupResolver } from '@hookform/resolvers/yup';
import { ImageIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { api } from '../../../services/api.js';
import {
	Container,
	ErrorMessage,
	Form,
	Input,
	InputGroup,
	Label,
	LabelUploand,
	Select,
	SubmitButton,
} from './styled';

const schema = yup.object({
	name: yup.string().required('Digite o Nome do Produto'),
	price: yup.number().positive().required('Digite o Preço do Produto'),
	category: yup.object().required('Escolha uma categoria'),
	file: yup
		.mixed()
		.test('required', 'Escolha um Arquivo', (value) => {
			return value && value.length > 0;
		})
		.test('fileSize', 'Carregue Arquivo de até 10mg', (value) => {
			return value && value.length > 0 && value[0].size <= 100000;
		})
		.test('type', 'Carregue Apenas Imagens PNG ou JPEG', (value) => {
			return (
				(value && value.length > 0 && value[0].type === 'image/jpeg') ||
				value[0].type === 'image/png'
			);
		}),
});

export function NewProduct() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			console.log(data);

			setCategories(data);
		}
		loadCategories();
	}, []);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		const productFormData = new FormData();

		productFormData.append('name', data.name);
		productFormData.append('price', data.price * 100);
		productFormData.append('category_id', data.category.id);
		productFormData.append('file', data.file[0]);

		await toast.promise(api.post('/products', productFormData), {
			pending: 'Adicionando Produto>...',
			success: 'Produto Criado com Sucesso!',
			error: 'Falha ao Adicionar o Produto, Tente Novamente',
		});
	};

	return (
		<div>
			<Container>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputGroup>
						<Label>Nome</Label>
						<Input type='text' {...register('name')} />
						<ErrorMessage>{errors?.name?.message}</ErrorMessage>
					</InputGroup>
					<InputGroup>
						<Label>Preço</Label>
						<Input type='number' {...register('number')} />
						<ErrorMessage>{errors?.price?.message}</ErrorMessage>
					</InputGroup>
					<InputGroup>
						<LabelUploand>
							<ImageIcon />
							<input
								type='file'
								{...register('file')}
								accept='image/png, image/jpeg'
								onChange={(value) => {
									setFileName(value?.target?.files[0]?.name);
									register('file').onChange(value);
								}}
							/>
							{fileName || 'Upload do Produto'}
						</LabelUploand>
						<ErrorMessage>{errors?.file?.message}</ErrorMessage>
					</InputGroup>
					<InputGroup>
						<Label>Categoria</Label>
						<Controller
							name='category'
							control={control}
							render={(field) => (
								<Select
									{...field}
									options={categories}
									getOptionLabel={(category) => category.name}
									getOptionValue={(category) => category.id}
									placeholder='Categorias'
									menuPortalTarget={document.body}
								/>
							)}
						/>

						<ErrorMessage>{errors?.category?.message}</ErrorMessage>
					</InputGroup>

					<SubmitButton>Adicionar Produto</SubmitButton>
				</Form>
			</Container>
		</div>
	);
}
