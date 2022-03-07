import styled from 'styled-components';

export const IconWrapper = styled.div`
	width: ${({ theme }) => theme.spacing.sLg};
	height: ${({ theme }) => theme.spacing.sLg};
	padding: ${({ theme }) => theme.spacing.sSm};
	fill: ${({ theme }) => theme.colors.bgContrast};
`;

export const IconContrast = styled.g`
	fill: ${({ theme }) => theme.colors.bg};
`;
