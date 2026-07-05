import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	padding: 20px;
	border-radius: 29px;
	background-color: #fff;
	cursor: grab;
	box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
	transition: 0.5s;
	position: relative;

	div {
		width: 100%;
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		p {
			color: #ff8c05;
			font-weight: bold;
			font-size: 18px;
			line-height: 20px;
			margin-top: 40px;
		}
		strong {
			font-size: 22px;
			color: #363636;
			font-weight: bold;
			line-height: 20px;
			margin-top: 4px;
		}
	}
	&:hover {
		transform: translateY(-15px);
	}
`;

export const CardImage = styled.img`
	height: 100px;
	position: absolute;
	top: -50px;
	border-radius: 15px;
`;
