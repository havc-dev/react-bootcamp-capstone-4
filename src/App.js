import { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

import HomePage from "./pages/HomePage.jsx";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer.jsx";

const StyledApp = styled.div`
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.bg};
	font-family: ${(props) => props.theme.fonts.family};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function App() {
	const date = new Date();
	const year = date.getFullYear().toLocaleString();
	const [theme, setTheme] = useState("light");

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<GlobalStyles />
			<StyledApp>
				<Header themePicker={themeToggler} />
				<HomePage />
				<Footer>
					<p>
						{`Ecommerce created during Wizeline’s Academy React Bootcamp ${year}`}{" "}
						&copy;
					</p>
				</Footer>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
