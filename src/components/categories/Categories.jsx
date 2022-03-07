import { CategoryImage, CategoryText } from "./CategoryCard";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import Loader from "../common/loader/Loader";

import { Section } from "../common/section/Section";
import { Heading } from "../common/text/Heading";
import { Grid, GridItem } from "../common/layout/Grid";

import styled from "styled-components";

const PositionRelative = styled.div`
	position: relative;
`;

const Categories = () => {
	const { data, isLoading } = useProductCategories();

	return (
		<Section column>
			<Heading>CATEGORIES</Heading>
			{isLoading && <Loader />}
			<Grid>
				{!isLoading &&
					data?.results.map((cat) => (
						<GridItem key={cat.data.name}>
							<PositionRelative>
								<CategoryText>{cat.data.name}</CategoryText>
								<CategoryImage
									src={cat.data.main_image.url}
									alt={cat.data.main_image.alt}
								/>
							</PositionRelative>
						</GridItem>
					))}
			</Grid>
		</Section>
	);
};

export default Categories;
