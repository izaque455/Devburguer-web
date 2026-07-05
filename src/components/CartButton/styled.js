import styled from 'styled-components';

export const ContainerButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #9758a6;
	width: 100%;
	height: 40px;
	border: none;
	border-radius: 5px;
	color: #fff;
	transition: 0.5s;

	&:hover {
		background-color: #6f357c;
	}

	img {
		height: 20px;
	}
`;
