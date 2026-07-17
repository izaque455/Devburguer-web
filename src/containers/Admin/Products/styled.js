import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 24px 24px 32px;
	background: ${(props) => props.theme.secondWhite};
	border-radius: 24px;
	box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
	min-height: calc(100vh - 130px);
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 24px;
`;

export const Breadcrumbs = styled.div`
	font-size: 0.9rem;
	color: ${(props) => props.theme.darkGray};
`;

export const TitleBar = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
`;

export const Title = styled.h1`
	font-size: 1.8rem;
	color: ${(props) => props.theme.mainBlack};
	margin: 0;
`;

export const SearchWrapper = styled.div`
	flex: 1;
	max-width: 420px;
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 14px 18px;
	border-radius: 999px;
	border: 1px solid ${(props) => props.theme.lightGray};
	background: ${(props) => props.theme.white};
	font-size: 0.95rem;
	color: ${(props) => props.theme.mainBlack};
	outline: none;

	&:focus {
		border-color: ${(props) => props.theme.purple};
		box-shadow: 0 0 0 4px rgba(151, 88, 166, 0.12);
	}

	&::placeholder {
		color: ${(props) => props.theme.darkGray};
	}
`;

export const StyledTableContainer = styled.div`
	overflow-x: auto;
	background: ${(props) => props.theme.white};
	border-radius: 20px;
	border: 1px solid ${(props) => props.theme.lightGray};
`;

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	min-width: 720px;

	thead {
		background: ${(props) => props.theme.mainBlack};
		color: ${(props) => props.theme.white};
		border-radius: 20px;
	}

	thead th {
		padding: 18px 20px;
		font-weight: 700;
		text-align: left;
		vertical-align: middle;
	}

	tbody tr {
		border-bottom: 1px solid ${(props) => props.theme.lightGray};
	}

	tbody tr:last-child {
		border-bottom: none;
	}

	tbody td {
		padding: 16px 20px;
		vertical-align: middle;
		color: ${(props) => props.theme.mainBlack};
	}
`;

export const ProductImage = styled.img`
	width: 70px;
	height: 70px;
	object-fit: cover;
	border-radius: 16px;
`;
