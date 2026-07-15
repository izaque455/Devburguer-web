import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	.carousel-item {
		padding-right: 40px;
	}
	.react-multiple-carousel__arrow--left {
		left: 1%;
	}

	padding-left: 40px;
`;
export const Title = styled.h2`
	font-size: 32px;
	color: ${(props) => props.theme.purple};
	font-weight: 800;
	padding-bottom: 12px;
	position: relative;
	text-align: center;
	margin-bottom: 40px;
	top: 15px;

	&::after {
		content: '';

		position: absolute;
		width: 56px;
		height: 4px;
		bottom: 0;
		background-color: ${(props) => props.theme.purple};
		left: calc(50% - 28px);
	}
`;
export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
	background-position: center;
	background-size: cover;

	display: flex;
	align-items: center;
	padding: 20px 10px;
	
	width: 100%;
	height: 250px;
	border-radius: 20px;
`;

export const CategoryButton = styled(Link)`
	color: ${(props) => props.theme.white};
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10px 30px;
	border-radius: 30px;
	font-size: 22.5px;
	font-weight: bold;
	margin-top: 50px;
	text-decoration: none;
	transition: 0.3s;

	&:hover {
		background-color: #${(props) => props.theme.purple};
	}
`;
