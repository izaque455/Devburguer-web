import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/background.png';
import BackGroundLogin from '../../assets/background-login.jpg';

export const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
`;
export const LeftContainer = styled.div`
  background: url('${BackGroundLogin}');
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }
`;
export const RightContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 100%;
	height: 100%;
	max-width: 50%;
  background: url('${Background}');
  background-size: cover;
  background-color: #1E1E1E;

  p{
    color: ${(props) => props.theme.white};
    font-size: 16px;
    font-weight: 800;

    
  }
`;
export const Title = styled.h2`
	font-family: 'Road Rage', sans-serif;
	font-size: 40px;
	color: ${(props) => props.theme.white};

	span {
		color: #${(props) => props.theme.purple};
		font-family: 'Road Rage', sans-serif;
	}
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
	width: 100%;
	max-width: 400px;
`;
export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 100%;

	input {
		width: 100%;
		border: none;
		height: 52px;
		border-radius: 5px;
		padding: 0 18px;
	}
	label {
		font-size: 18;
		font-weight: 800;
		color: ${(props) => props.theme.white};
	}

	p {
		color: #dc143c;
		height: 10px;
		font-weight: 600;
	}
`;

export const Button = styled.button``;

export const Link = styled(ReactLink)`
	text-decoration: underline;
	color: ${(props) => props.theme.white};
	font-size: 16px;
`;
