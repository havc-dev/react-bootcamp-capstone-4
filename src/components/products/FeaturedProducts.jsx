import Loader from "../common/loader/Loader";

import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

import { Heading } from "../common/text/Heading";
import { Grid, GridItem } from "../common/layout/Grid";
import {
	Product,
	ProductCategory,
	ProductDescription,
	ProductImage,
	ProductPrice,
} from "./ProductCard";

const FeaturedProducts = () => {
	const { data, isLoading } = useFeaturedProducts();
	console.log(data.results);
	return (
		<>
			<Heading>Best Sellers!</Heading>
			<Grid>
				{isLoading ? (
					<Loader />
				) : (
					data.results.map((prod) => (
						<GridItem key={prod.id}>
							<Product>
								<ProductDescription>{prod.data.name}</ProductDescription>
								<ProductPrice>${prod.data.price}</ProductPrice>
								<ProductCategory>{prod.data.category.slug}</ProductCategory>
								<ProductImage
									src={prod.data.mainimage.url}
									alt={prod.data.mainimage.alt}
								/>
							</Product>
						</GridItem>
					))
				)}
			</Grid>
		</>
	);
};

export default FeaturedProducts;
