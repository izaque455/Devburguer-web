import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BannerCardapio from '../../assets/BackgroundCardapio.png';
import Background from '../../assets/background-home.png';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #f0f0f0;
	background: url('${Background}');
`;
export const Banner = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    position: relative;


	background: url('${BannerCardapio}');
    background-position: center;
    background-color: #1f1f1f;
    background-size: cover;
    width: 100%;

    img{
        width: 100px;
        position: absolute;
        left: 15px;
        top: 15px;
        cursor: pointer;
    }


    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 90px;
        color: ${(props) => props.theme.white};
        line-height: 65px;
        align-items: center;
        position: absolute;
        right: 20%;
        top: 30%;
        text-align:center;

        span{
            display: block;
            color: ${(props) => props.theme.white};
            font-size: 20px;
            font-weight: 400;
        }
        
}
`;
export const CategoryMenu = styled.div`
	display: flex;
	justify-content: center;
	gap: 50px;
	margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	color: ${(props) => (props.$isActoveCategory ? `${props.theme.purple}` : '#696969')};
	background: none;
	font-size: 24px;
	font-weight: 500;
	padding-bottom: 7px;
	line-height: 20px;
	border-bottom: ${(props) => props.$isActoveCategory && `3px solid ${props.theme.purple}`};
`;
export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 40px;
	justify-content: center;
	max-width: 1280px;
	gap: 60px;
	margin: 50px auto 0;
`;
