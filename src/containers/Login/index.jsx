import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button/index.jsx';
import { useUser } from '../../hooks/UserContext.jsx';
import { api } from '../../services/api.js';
import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	Link,
	RightContainer,
	Title,
} from './styles';

export function Login() {
	const navigate = useNavigate();
	const { putUserData } = useUser();

	const schema = Yup.object({
		email: Yup.string()
			.email('Digite um email Valido')
			.required('O email é obrigatório'),
		password: Yup.string()
			.min(6, 'Precisa ter Pelo Menos 6 Caracteres')
			.required('Degite sua senha'),
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
			const { data: userData } = await toast.promise(
				api.post('/sessions', {
					email: data.email,
					password: data.password,
				}),
				{
					pending: 'Verificando Seus Dados ⟳',
					success: 'Seja Bem-vindo(a) ✅',
				},
			);

			putUserData(userData);

			setTimeout(() => {
				navigate('/');
				if (userData?.admin) {
					navigate('/admin/pedidos');
				} else {
					navigate('/');
				}
			}, 3000);
		} catch (error) {
			if (error.status === 400 || error.status === 409) {
				toast.error('Email Ou Senha Incorretos');
			} else {
				toast.error('😭 Falha no Nosso Sistema, Tente Novamente.');
			}
			console.log(error.status);
		}
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt='Logo-DevBurguer' />
			</LeftContainer>
			<RightContainer>
				<Title>
					Olá, seja bem vindo ao <span> Dev Burguer!</span>
					<br />
					Acesse com seu <span>Login e senha</span>
				</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
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
					<Button type='submit'>Entrar</Button>
				</Form>
				<p>
					Não possui conta? <Link to='/cadastro'> Clique aqui.</Link>
				</p>
			</RightContainer>
		</Container>
	);
}
