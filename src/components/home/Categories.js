import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<section className="categories">
			<Link
				to={"/shop/accessories"}
				className="category"
			>
				<p className="category-title">Accessories</p>
			</Link>

			<Link
				to={"/shop/jewelry"}
				className="category"
			>
				<p className="category-title">Jewelry</p>
			</Link>
			<Link
				to={"/shop/bags"}
				className="category"
			>
				<p className="category-title">Bags</p>
			</Link>
		</section>
	);
};

export default Categories;
