import { useState } from 'react';
import { SliderBtn } from '../common/buttons/SliderBtn';

import styled from 'styled-components';

const Slider = ({ items }) => {
	//items == data.results
	// console.log(items);

	const [slideIndex, setSlideIndex] = useState(1);
	return (
		<SliderWrapper>
			{items?.map((slide, index) => (
				<Slide key={slide.data.name + '' + index}>
					<SlideImage
						src={slide.data.main_image.url}
						alt={slide.data.main_image.alt}
					/>
					<SlideText>
						<p>{slide.data.title}</p>
					</SlideText>
				</Slide>
			))}
			<div>
				<SliderBtn direction={'left'} />
				<SliderBtn direction={'right'} />
			</div>
		</SliderWrapper>
	);
};

const SliderWrapper = styled.div`
	display: flex;
	overflow-x: scroll;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
	width: 100%;
	box-shadow: ${({ theme }) => theme.shadows.small};
	position: relative;
`;

const Slide = styled.article`
	scroll-snap-align: center;
	margin: 0;
`;

const SlideImage = styled.img`
	max-width: 1000px;
	object-fit: cover;
	display: block;
`;

const SlideText = styled.div`
	box-shadow: ${({ theme }) => theme.shadows.small};
	background-color: ${({ theme }) => theme.colors.bgContrast};
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;
	padding: ${({ theme }) => theme.padding.p};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export default Slider;
