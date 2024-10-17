import OurBrands from "../home/OurBrands";
import Aside from "./Aside";
import ShopItems from "./ShopItems";
import "../../styles/shop.css";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const Shop = ({ title = "Shop" }) => {
	document.title = "Fre Fashion & Clothing | Shop";
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		//setLoading;
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		// Clear the timeout if the component unmounts
		return () => clearTimeout(timer);
	}, []);
	return (
		<div>
			{loading && <Loading />}

			{!loading && (
				<>
					<div className="heading">
						<h1>{title}</h1>
					</div>

					<section className="shop section">
						<Aside />

						<ShopItems />
					</section>

					<OurBrands />
				</>
			)}
		</div>
	);
};

export default Shop;
