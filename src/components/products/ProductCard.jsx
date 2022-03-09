import styled from "styled-components";

export const Product = styled.article`
	margin: ${({ theme }) => theme.spacing.s} 0;
	aspect-ratio: 16 / 9;
	position: relative;
	width: 100%;
	transition: 0.3s all ease-in-out;
	&:hover {
		transform-origin: center;
		transform: rotateX(-5deg) rotateY(-8deg);
		box-shadow: ${({ theme }) => theme.shadows.large};
	}
`;

export const ProductDescription = styled.p`
	position: absolute;
	margin: 0;
	top: 100%;
	left: 50%;
	transform: translate(-50%, -125%);
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	font-size: ${({ theme }) => theme.spacing.sMd};
	color: ${({ theme }) => theme.colors.bgContrast};
	backdrop-filter: blur(4px);
	padding: ${({ theme }) => theme.padding.p13Lg};
	border: 1px solid ${({ theme }) => theme.colors.bg};
	text-align: center;
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: 0.3s all ease-in-out;
	background-color: ${({ theme }) => theme.colors.primary25};
	z-index: 2;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.large};
		backdrop-filter: blur(0px);
		background-color: transparent;
	}
`;

export const ProductPrice = styled.p`
	position: absolute;
	margin: 0;
	top: 0%;
	right: 0%;
	transform: translate(20%, 100%);
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	font-size: ${({ theme }) => theme.spacing.sMd};
	color: ${({ theme }) => theme.colors.bgContrast};
	backdrop-filter: blur(4px);
	padding: ${({ theme }) => theme.padding.p13Lg};
	border: 1px solid ${({ theme }) => theme.colors.bg};
	text-align: center;
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: 0.3s all ease-in-out;
	background-color: ${({ theme }) => theme.colors.primary25};
	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.large};
		backdrop-filter: blur(0px);
		background-color: transparent;
	}
`;
export const ProductCategory = styled.p`
	z-index: 0;
	position: absolute;
	margin: 0;
	bottom: 0%;
	right: 0%;
	transform: translate(-20%, 45%);
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	font-size: ${({ theme }) => theme.spacing.sMd};
	color: ${({ theme }) => theme.colors.bgContrast};
	backdrop-filter: blur(4px);
	padding: ${({ theme }) => theme.padding.p13Lg};
	border: 1px solid ${({ theme }) => theme.colors.bg};
	text-align: center;
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: 0.3s all ease-in-out;
	background-color: ${({ theme }) => theme.colors.primary25};
	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.large};
		backdrop-filter: blur(0px);
		background-color: transparent;
	}
`;

export const ProductImage = styled.img.attrs((props) => ({
	src: props.src,
	alt: props.alt,
}))`
	width: 100%;
	display: block;
	object-fit: cover;
`;
