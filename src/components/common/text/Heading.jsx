import styled from "styled-components";

export const Heading = styled.h1`
	font-size: 2.1em;
	text-align: center;
	color: ${(props) => (props.main ? "sky" : "black")};
	margin: 1em 0;
`;
