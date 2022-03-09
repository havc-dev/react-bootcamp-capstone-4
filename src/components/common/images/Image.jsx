import styled from "styled-components";

export const Image = styled.img.attrs((props) => ({
	src: props.src,
	alt: props.alt,
}))`
	display: block;
	max-width: 100%;
	object-fit: cover;
`;
