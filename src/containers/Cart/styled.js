import styled from 'styled-components';
import BackgrounTwoCart from '../../assets/background-home.png';
import BackgroundTexture from '../../assets/background-login.jpg';

export const Container = styled.div`
	width: 100%;
	background-color: #f0f0f0;
    background: url('${BackgrounTwoCart}');
	min-height: 100vh;
`;
export const Banner = styled.div`
	background: url('${BackgroundTexture}');
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

    img{
        height: 150px;
    }
`;
export const Title = styled.div`
	font-size: 32px;
	font-weight: 800;
	padding-bottom: 12px;
	color: ${(props) => props.theme.gren};
	text-align: center;

	position: relative;

	&::after {
		position: absolute;
		left: calc(50% + -15px);
		content: '';
		bottom: 0;
		width: 56px;
		height: 4px;
		background-color: ${(props) => props.theme.gren};
	}
`;
export const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 30%;
	gap: 40px;
	width: 100%;
	max-width: 1280px;
	padding: 40px;
	margin: 0 auto;
`;
