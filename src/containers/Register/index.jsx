import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button/index.jsx';
import { api } from '../../services/api.js';
import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	Link,
	RightContainer,
	Title,
} from './styles.js';

export function Register() {
	const navigate = useNavigate();
	const schema = Yup.object({
		name: Yup.string().required('O nome é obrigatório'),

		email: Yup.string()
			.email('Digite um email Valido')
			.required('O email é obrigatório'),

		password: Yup.string()
			.min(6, 'Precisa ter Pelo Menos 6 Caracteres')
			.required('Degite sua senha'),

		passwordConfirm: Yup.string()
			.oneOf([Yup.ref('password')], 'As Senhas devem ser Iguais')
			.required('Confirme Sua Senha'),
	}).required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				setInterval(() => {
					navigate('/login');
				}, 2100);
				toast.success('Cadastro Feito com Sucesso! 😀');
			} else if (status === 400 || status === 409) {
				toast.error('Email Já Cadastrado! Faça Login para Continuar');
			} else {
				throw new Error();
			}
		} catch (error) {
			toast.error('😭 Falha no Nosso Sistema, Tente Novamente.');
		}
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt='Logo-DevBurguer' />
			</LeftContainer>
			<RightContainer>
				<Title>Criar conta</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label htmlFor='name'>Nome</label>
						<input type='text' {...register('name')} />
						<p>{errors.name?.message}</p>
					</InputContainer>

					<InputContainer>
						<label htmlFor='email'>Email</label>
						<input type='email' {...register('email')} />
						<p>{errors.email?.message}</p>
					</InputContainer>

					<InputContainer>
						<label htmlFor='password'>Senha</label>
						<input type='password' {...register('password')} />
						<p>{errors.password?.message}</p>
					</InputContainer>
					<InputContainer>
						<label htmlFor='passwordConfirm'>Confirmar Senha</label>
						<input type='password' {...register('passwordConfirm')} />
						<p>{errors.passwordConfirm?.message}</p>
					</InputContainer>
					<Button type='submit'>Criar conta</Button>
				</Form>
				<p>
					Já possui Conta? <Link to='/login'> Clique aqui.</Link>
				</p>
			</RightContainer>
		</Container>
	);
}
