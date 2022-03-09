import Slider from "../slider/Slider";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import Loader from "../common/loader/Loader";

import styled from "styled-components";

const BannersWrapper = styled.section`
	max-width: 100%;
	box-shadow: ${(props) => props.theme.shadows.small};
	background: transparent;
`;

const FeaturedBanner = () => {
	const { data, isLoading } = useFeaturedBanners();
	return (
		<BannersWrapper>
			{isLoading ? <Loader /> : <Slider items={data.results} />}
		</BannersWrapper>
	);
};

export default FeaturedBanner;
