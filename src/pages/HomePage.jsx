import { Heading } from "../components/common/text/Heading";
import { Page } from "./Page";

import FeaturedBanner from "../components/banners/FeaturedBanner";
import Categories from "../components/categories/Categories";
import FeaturedProducts from "../components/products/FeaturedProducts";
import { Logo } from "../components/logo/Logo";

export default function HomePage() {
	return (
		<>
			<Page>
				<Heading>
					<Logo>
						FURNITUR<span>IZE</span>
					</Logo>
				</Heading>
				<FeaturedBanner />
				<Categories />
				<FeaturedProducts />
			</Page>
		</>
	);
}
