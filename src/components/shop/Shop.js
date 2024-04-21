import OurBrands from "../home/OurBrands";
import Aside from "./Aside";
import ShopItems from "./ShopItems";

const Shop = ({ title = "Shop" }) => {
	return (
		<div>
			<div className="heading">
				<h1>{title}</h1>
			</div>

			<section className="shop section">
				<Aside />

				<ShopItems />
			</section>

			<OurBrands />
		</div>
	);
};

export default Shop;
