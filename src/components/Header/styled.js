import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${(props) => props.theme.mainBlack};
	width: 100%;
	height: 72px;
	padding: 0 56px;
`;
export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
`;
export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 72px;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;

		hr {
			height: 24px;
			border: 1px solid ${(props) => props.theme.darkGray};
		}
	}
`;
export const HeaderLink = styled(Link)`
	color: ${(props) => (props.$isActive ? props.theme.purple : props.theme.white)};
	text-decoration: 14px;
	font-size: 14px;
	transition: 0.2s;
	border-bottom:  ${(props) => (props.$isActive ? ` 1px solid ${props.theme.purple}` : 'none')};
	padding-bottom: 2px;

	&:hover {
		color: ${(props) => props.theme.purple};
	}
`;
export const Options = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 48px;
`;
export const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 12px;

	p {
		color: ${(props) => props.theme.white};
		line-height: 90%;
		font-weight: 300;
		margin-top: 8px;

		span {
			font-weight: 700;
			color: rgba(151, 88, 166, 1);
		}
	}
`;
export const LinkConteiner = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;
export const Logout = styled.button`
	color: ${(props) => props.theme.red};
	background: none;
	border: none;
	font-weight: bold;
`;
