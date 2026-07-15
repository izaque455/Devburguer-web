import styled from 'styled-components';

export const ProductImage = styled.img`
	height: 80px;
	width: 105px;
	border-radius: 16px;
`;
export const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30px;
		width: 30px;
		color: ${(props) => props.theme.white};
		border-radius: 4px;
		background-color: ${(props) => props.theme.purple};
		transition: all 0.3s;
		border: none;

		&:hover {
			background-color: #6f357c;
		}
	}
`;
export const EmpryCart = styled.p`
	font-size: 20px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.gren};
	width: 330%;
`;
export const TotalPrice = styled.p`
	font-weight: bold;
`;

export const TrashImage = styled.img`
	height: 20px;
	width: 20px;
	cursor: pointer;
`;
