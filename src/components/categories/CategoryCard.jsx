import styled from "styled-components";

export const Category = styled.article`
	margin: ${({ theme }) => theme.spacing.s} 0;
	position: relative;
	box-shadow: ${({ theme }) => theme.shadows.small};
	width: 100%;
	transition: 0.3s all ease-in-out;
	&:hover {
		transform-origin: center;
		transform: rotateX(-5deg) rotateY(-8deg);
		box-shadow: ${({ theme }) => theme.shadows.large};
	}
`;
export const CategoryText = styled.p`
	position: absolute;
	margin: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	font-size: ${({ theme }) => theme.spacing.sMd};
	color: ${({ theme }) => theme.colors.text};
	backdrop-filter: blur(4px);
	padding: ${({ theme }) => theme.padding.p13Lg};
	border: 1px solid ${({ theme }) => theme.colors.bg};
	text-align: center;
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: 0.3s all ease-in-out;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.large};
		backdrop-filter: blur(0px);
	}
`;

export const CategoryImage = styled.img.attrs((props) => ({
	src: props.src,
	alt: props.alt,
}))`
	width: 100%;
	height: 100%;
	display: block;
`;
