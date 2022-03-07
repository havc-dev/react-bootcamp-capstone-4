import styled from "styled-components";

const searchHandler = (e) => {
	e.preventDefault();
	console.log(e.target.value);
};

export const SearchBar = styled.input.attrs((props) => ({
	type: "text",
	id: "mySearch",
	onKeyUp: (e) => searchHandler(e),
	placeholder: "Search..",
	title: "Type in a category",
}))`
	padding: ${(props) => props.theme.spacing.spacing};
	background-color: ${(props) => props.theme.colors.bg};
	color: ${(props) => props.theme.colors.bgContrast};
	border: none;
	margin-bottom: ${(props) => props.theme.spacing.spacing};
	:focus-visible {
		outline-color: ${(props) => props.theme.colors.primary};
	}
`;
