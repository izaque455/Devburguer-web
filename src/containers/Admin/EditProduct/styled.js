import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	padding: 24px;
	background: ${(props) => props.theme.secondWhite};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.blackGray};
	padding: 32px;
	border-radius: 20px;
	width: 100%;
	max-width: 380px;
	gap: 12px;
`;

export const Title = styled.h2`
	margin: 0 0 16px;
	color: ${(props) => props.theme.white};
	font-size: 1.8rem;
	letter-spacing: 0.02em;
	font-weight: 700;
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	color: ${(props) => props.theme.white};
	font-size: 14px;
`;

export const Label = styled.label`
	font-weight: 600;
`;

export const Input = styled.input`
	width: 100%;
	height: 48px;
	border-radius: 5px;
	padding: 0 12px;
	border: none;
	font-size: 1rem;
`;

export const SubmitButton = styled.button`
	width: 100%;
	height: 52px;
	border: none;
	border-radius: 5px;
	background-color: ${(props) => props.theme.purple};
	color: ${(props) => props.theme.white};
	font-family: ${(props) => props.theme.roadRageFont};
	font-size: 1.2rem;
	transition: 0.5s;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.secondDarkPurple};
	}
`;

export const ImagePreview = styled.img`
	width: 180px;
	height: 180px;
	object-fit: cover;
	border-radius: 12px;
`;

export const PreviewBox = styled.div`
	width: 180px;
	height: 180px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed ${(props) => props.theme.white};
	border-radius: 12px;
	color: ${(props) => props.theme.white};
`;
