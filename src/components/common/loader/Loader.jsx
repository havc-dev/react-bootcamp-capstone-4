import styled from "styled-components";

const Loader = () => {
	return (
		<LoaderWrapper>
			Loading<Dot1>.</Dot1>
			<Dot2>.</Dot2>
			<Dot3>.</Dot3>
		</LoaderWrapper>
	);
};

export default Loader;

const LoaderWrapper = styled.p`
	font-size: calc(2vw + 3rem);
	text-align: center;
	transition: 0.3s ease-in-out;
	color: $color-dark-bg;
	@keyframes loading {
		0% {
			color: $color-light-bg;
		}
		50% {
			color: $color-primary;
		}
		100% {
			color: $color-dark-bg;
		}
	}
`;

const Dot1 = styled.span`
	animation-name: loading;
	animation-duration: 0.9s;
	animation-delay: 0;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-timing-function: ease-in-out;
`;
const Dot2 = styled.span`
	animation-name: loading;
	animation-duration: 0.9s;
	animation-delay: 0;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-timing-function: ease-in-out;
`;
const Dot3 = styled.span`
	animation-name: loading;
	animation-duration: 0.9s;
	animation-delay: 0;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-timing-function: ease-in-out;
`;
