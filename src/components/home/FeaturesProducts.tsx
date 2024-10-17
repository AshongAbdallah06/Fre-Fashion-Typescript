import Heading from "./Heading";
import SharedItems from "../SharedItems";

const FeaturesProducts = () => {
	return (
		<section className="section">
			<Heading heading="Featured Products" />

			<div className="items-row">
				<SharedItems />
			</div>
		</section>
	);
};

export default FeaturesProducts;
