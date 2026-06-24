import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Logo from '../../assets/Logo.svg';
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
				<Form>
					<InputContainer>
						<label htmlFor='email'>Email</label>
						<input type='email' />
					</InputContainer>

					<InputContainer>
						<label htmlFor='email'>Senha</label>
						<input type='password' />
					</InputContainer>
					<Button>Entrar</Button>
				</Form>
				<p>
					Não possui conta <a href='#'> Clique Aqui.</a>
				</p>
			</RightContainer>
		</Container>
	);
}
