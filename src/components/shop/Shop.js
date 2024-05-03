import OurBrands from "../home/OurBrands";
import Aside from "./Aside";
import ShopItems from "./ShopItems";
import "../../styles/shop.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Loading from "../Loading";

const Shop = ({ title = "Shop" }) => {
	// const { loading, setLoading } = useContext(AppContext);
	document.title = "Fre Fashion & Clothing | Shop";
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
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
