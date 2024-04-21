import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<section className="categories">
			<Link
				to={"/shop/accessories"}
				className="category"
			>
				Accessories
			</Link>

			<Link
				to={"/shop/jewelry"}
				className="category"
			>
				Jewelry
			</Link>
			<Link
				to={"/shop/bags"}
				className="category"
			>
				Bags
			</Link>
		</section>
	);
};

export default Categories;
