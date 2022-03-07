import styled from 'styled-components';

export const Footer = styled.footer`
	margin-top: 5rem;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.bgContrast};
	padding: ${({ theme }) => theme.padding.pV};
	> p {
		color: ${({ theme }) => theme.colors.primary};
		text-align: center;
		width: 95%;
		margin: 0 auto;
	}
`;
