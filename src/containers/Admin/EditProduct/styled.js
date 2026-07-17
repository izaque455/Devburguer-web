import styled from 'styled-components';

export const Container = styled.div`
	max-width: 700px;
	margin: 0 auto;
	padding: 24px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	font-weight: 600;
	color: #333;
`;

export const Input = styled.input`
	padding: 10px 12px;
	border: 1px solid #ccc;
	border-radius: 8px;
`;

export const SubmitButton = styled.button`
	padding: 12px 16px;
	border: none;
	border-radius: 8px;
	background-color: ${({ theme }) => theme?.purple || '#9758a6'};
	color: #fff;
	font-weight: 700;
	cursor: pointer;
`;

export const ImagePreview = styled.img`
	width: 180px;
	height: 180px;
	object-fit: cover;
	border-radius: 12px;
`;

export const PreviewBox = styled.div`
	width: 180px;
	height: 180px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed #ccc;
	border-radius: 12px;
	color: #777;
`;
