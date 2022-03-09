import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	font-size: 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
	margin: ${({ theme }) => theme.spacing.sLg} auto;
	padding: ${({ theme }) => theme.padding.p13};
	border-radius: ${({ theme }) => theme.spacing.sSm};
	color: ${({ theme }) => theme.colors.bg};
	border: 2px solidi ${(props) => props.theme.bg};
`;
