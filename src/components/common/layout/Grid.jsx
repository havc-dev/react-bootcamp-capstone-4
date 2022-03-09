import styled from 'styled-components';

export const Grid = styled.div`
	margin: 0 auto;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const GridItem = styled.div`
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: 0.3s all ease-in-out;
	list-style-type: none;
	display: flex;
	justify-content: center;
	padding: ${({ theme }) => theme.spacing.s};
	width: clamp(260px, 30vw, 80vw);
	&:hover {
		transform-origin: center;
		transform: rotateX(-5deg) rotateY(-8deg);
		box-shadow: ${({ theme }) => theme.shadows.large};
	}
`;
