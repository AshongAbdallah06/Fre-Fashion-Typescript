import Heading from "./Heading";
import useProducts from "../../useProducts";
import formatCurrency from "../../utils/money";

const FeaturesProducts = () => {
	const { items } = useProducts();

	return (
		<section className="section">
			<Heading heading="Featured Products" />

			<div className="items-row">
				{items.map((item) => (
					<div className="product-item">
						<div className="product-image">
							<img
								alt="product"
								src={item.image}
							/>
						</div>
						<h4 className="product-name">{item.name}</h4>
						<p className="price">
							$ {formatCurrency(item.price)} USD
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturesProducts;
