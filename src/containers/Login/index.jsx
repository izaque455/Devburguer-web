import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Logo from '../../assets/Logo.svg';
import { api } from '../../services/api.js';
import { Button } from '../Button';
import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	RightContainer,
	Title,
} from './styles';

export function Login() {
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
		const response = await api.post('/sessions', {
			email: data.email,
			password: data.password,
		});

		console.log(response);
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
					Não possui conta <a href='#'> Clique Aqui.</a>
				</p>
			</RightContainer>
		</Container>
	);
}
