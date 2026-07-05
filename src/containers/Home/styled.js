import styled from 'styled-components';
import BackgroundHome from '../../assets/background-home.png';
import BannerHome from '../../assets/banner-home.png';

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: #fff;
        position: absolute;
        right: 20%;
        top: 10%;
    }
    img{
        width: 100px;
    }
`;
export const Container = styled.section`
	background:url('${BackgroundHome}');
    height: 100%;
`;
export const Content = styled.div`
	padding-bottom: 30px;
`;
