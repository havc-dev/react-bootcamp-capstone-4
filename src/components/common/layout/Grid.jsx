import styled from "styled-components";

export const Grid = styled.ul`
	max-width: ${({ theme }) => theme.sizes.sm};
	display: grid;
	grid-gap: 1rem;
	grid-auto-columns: 1fr;
	grid-template-columns: repeat(
		auto-fit,
		minmax(${({ theme }) => theme.sizes.xs}, 1fr)
	);
	margin: 0;
	padding: 0;
`;

export const GridItem = styled.li`
	margin: ${({ theme }) => theme.spacing.s} 0;
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: 0.3s all ease-in-out;
	list-style-type: none;
	&:hover {
		transform-origin: center;
		transform: rotateX(-5deg) rotateY(-8deg);
		box-shadow: ${({ theme }) => theme.shadows.large};
	}
`;
