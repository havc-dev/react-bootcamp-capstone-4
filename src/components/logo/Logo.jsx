import styled from "styled-components";

export const Logo = styled.a`
	text-decoration: none;
	cursor: pointer;
	width: 100%;
	text-align: center;
	color: ${(props) => props.theme.colors.primary};
	font-size: 2.4rem;
	span {
		color: ${(props) => props.theme.colors.primary50};
	}
`;
