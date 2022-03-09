import styled from 'styled-components';

export const ShoppingCartBtn = styled.button`
	padding: ${(props) => props.theme.spacing.spacing},
		${(props) => props.theme.spacing.spacingMd};
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-weight: ${(props) => props.theme.fonts.weight.bold};
	border: none;
`;
