import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import FeaturesProducts from "./FeaturesProducts";
import OurBrands from "./OurBrands";
import Signup from "./Signup";

const Content = () => {
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
