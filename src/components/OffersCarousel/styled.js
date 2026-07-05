import styled from 'styled-components';

export const Container = styled.div`
	.carousel-item {
		padding-right: 40px;
	}
	overflow-x: hidden;
	.react-multi-carousel-list {
		overflow: visible;
	}
	.react-multiple-carousel__arrow--left {
		left: 15px;
	}

	padding-left: 40px;
	padding-bottom: 40px;
`;
export const Title = styled.h2`
	font-size: 32px;
	color: #61a120;
	font-weight: 800;
	padding-bottom: 12px;
	position: relative;
	text-align: center;
	margin-top: 80px;
	margin-bottom: 60px;

	&::after {
		content: '';

		position: absolute;
		width: 56px;
		height: 4px;
		bottom: 0;
		background-color: #61a120;
		left: calc(50% - 28px);
	}
`;
