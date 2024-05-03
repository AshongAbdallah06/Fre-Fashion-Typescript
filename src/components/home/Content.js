import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import FeaturesProducts from "./FeaturesProducts";
import OurBrands from "./OurBrands";
import Signup from "./Signup";
import { AppContext } from "../../App";

const Content = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clear the timeout if the component unmounts
		return () => clearTimeout(timer);
	}, []);
	document.title = "Fre Fashion & Clothing | Home";

	return (
		<main>
			<Banner />

			<Categories />

			<FeaturesProducts />

			<OurBrands />

			<Signup />
		</main>
	);
};

export default Content;
