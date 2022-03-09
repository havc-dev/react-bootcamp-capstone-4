import { createGlobalStyle } from "styled-components";

const hue = "285";
export const lightTheme = {
	colors: {
		primary: `hsla(${hue}, 100%, 45%, 1)`,
		primary75: `hsla(${hue}, 100%, 45%, 0.75)`,
		primary50: `hsla(${hue}, 100%, 45%, 0.5)`,
		primary25: `hsla(${hue}, 100%, 45%, 0.25)`,
		bg: `hsla(${hue}, 100%, 95%, 1)`,
		bgContrast: `hsla(${hue}, 100%, 5%, 1)`,
		text: `hsla(${hue}, 100%, 5%, 1)`,
		textMuted: `hsla(${hue}, 100%, 15%, 0.85)`,
	},
	spacing: {
		sSm: "4px",
		s: "8px",
		sMd: "16px",
		sLg: "32px",
	},
	padding: {
		p13Sm: "4px 12px",
		p13: "8px 24px",
		p13Lg: "12px 36px",
		p12: "8px 16px",
		p12Sm: "4px 8px",
		p: "8px",
		pV: "8px 0",
		pH: "0 8px",
	},
	fonts: {
		family: `"Rubik", sans-serif`,
		weight: {
			light: "300",
			regular: "400",
			bold: "500",
		},
	},
	shadows: {
		small: `0 1px 1px hsla(${hue}, 100%, 50%, 0.075),
            0 2px 2px hsla(${hue}, 100%, 50%, 0.075),
	          0 4px 4px hsla(${hue}, 100%, 50%, 0.075),
            0 8px 8px hsla(${hue}, 100%, 50%, 0.075),
	          0 16px 16px hsla(${hue}, 100%, 50%, 0.075)`,
		regular: `0 2px 2px hsla(${hue}, 100%, 50%, 0.075),
            0 4px 4px hsla(${hue}, 100%, 50%, 0.075),
	          0 8px 8px hsla(${hue}, 100%, 50%, 0.075),
            0 16px 16px hsla(${hue}, 100%, 50%, 0.075),
	          0 32px 32px hsla(${hue}, 100%, 50%, 0.075)`,
		large: `1 3px 3px hsla(${hue}, 100%, 50%, 0.075),
            1 6px 6px hsla(${hue}, 100%, 50%, 0.075),
	          1 12px 12px hsla(${hue}, 100%, 50%, 0.075),
            1 24px 24px hsla(${hue}, 100%, 50%, 0.075),
          	1 48px 48px hsla(${hue}, 100%, 50%, 0.075);`,
	},
	sizes: {
		xs: "320px",
		sm: "640px",
		md: "960px",
		lg: "1280",
	},
};

export const darkTheme = {
	colors: {
		primary: `hsla(${hue}, 100%, 45%, 1)`,
		primary75: `hsla(${hue}, 100%, 45%, 0.75)`,
		primary50: `hsla(${hue}, 100%, 45%, 0.5)`,
		primary25: `hsla(${hue}, 100%, 45%, 0.25)`,
		bg: `hsla(${hue}, 100%, 5%, 1)`,
		bgContrast: `hsla(${hue}, 100%, 15%, 1)`,
		text: `hsla(${hue}, 100%, 95%, 1)`,
		textMuted: `hsla(${hue}, 100%, 80%, 0.85)`,
	},
	spacing: {
		sSm: "4px",
		s: "8px",
		sMd: "16px",
		sLg: "32px",
	},
	padding: {
		p13Sm: "4px 12px",
		p13: "8px 24px",
		p13Lg: "12px 36px",
		p12: "8px 16px",
		p12Sm: "4px 8px",
		p: "8px",
		pV: "8px 0",
		pH: "0 8px",
	},
	fonts: {
		family: `"Rubik", sans-serif`,
		weight: {
			light: "300",
			regular: "400",
			bold: "500",
		},
	},
	shadows: {
		small: `0 1px 1px hsla(${hue}, 100%, 50%, 0.075),
            0 2px 2px hsla(${hue}, 100%, 50%, 0.075),
	          0 4px 4px hsla(${hue}, 100%, 50%, 0.075),
            0 8px 8px hsla(${hue}, 100%, 50%, 0.075),
	          0 16px 16px hsla(${hue}, 100%, 50%, 0.075)`,
		regular: `0 2px 2px hsla(${hue}, 100%, 50%, 0.075),
            0 4px 4px hsla(${hue}, 100%, 50%, 0.075),
	          0 8px 8px hsla(${hue}, 100%, 50%, 0.075),
            0 16px 16px hsla(${hue}, 100%, 50%, 0.075),
	          0 32px 32px hsla(${hue}, 100%, 50%, 0.075)`,
		large: `1 3px 3px hsla(${hue}, 100%, 50%, 0.075),
            1 6px 6px hsla(${hue}, 100%, 50%, 0.075),
	          1 12px 12px hsla(${hue}, 100%, 50%, 0.075),
            1 24px 24px hsla(${hue}, 100%, 50%, 0.075),
          	1 48px 48px hsla(${hue}, 100%, 50%, 0.075);`,
	},
	sizes: {
		xs: "320px",
		sm: "640px",
		md: "960px",
		lg: "1280",
	},
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }
`;
