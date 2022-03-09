import styled from 'styled-components';

export const Button = styled.button`
	font-size: 1rem;
	margin: ${({ theme }) => theme.spacing.s} auto;
	padding: ${({ theme }) => theme.padding.p13};
	border-radius: ${({ theme }) => theme.spacing.sSm};
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solidi ${(props) => props.theme.bg};
`;
