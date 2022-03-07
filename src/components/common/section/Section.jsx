import styled from "styled-components";

export const Section = styled.section`
	margin: 0 auto;
	display: flex;
	flex-direction: ${(props) => (props.column ? "column" : "row")};
`;
