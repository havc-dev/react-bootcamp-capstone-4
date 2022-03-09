import styled from 'styled-components';

export const SliderBtn = styled.button`
	background-color: transparent;
	padding: ${(props) => props.theme.spacing.spacingSm};
	backdrop-filter: blur(${(props) => props.theme.spacing.spacingSm});
	border: none;
	fill: ${(props) => props.theme.colors.primary};
	stroke: ${(props) => props.theme.colors.primary};
	position: absolute;
	top: 50%;
	translate: 0%, 50% &&left {
		left: 0%;
	}
	&&right {
		right: 0%;
	}
`;
