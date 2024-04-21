import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
	return (
		<aside>
			<div className="about-fre">
				<div className="title-text">
					<h3>About Fre</h3>
					<div className="line"></div>
				</div>

				<p className="about-text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Praesentium autem impedit iste fugit possimus, provident
					mollitia aut aliquid placeat tempora corporis eius ipsam
					rerum similique quod voluptatum, obcaecati illum eligendi?
				</p>

				<p className="about-text">support@fre.com</p>

				<p className="about-text">(800) 8001-8588</p>
			</div>

			<div className="categories-list-items">
				<div className="title-text">
					<h3>Categories</h3>
					<div className="line"></div>
				</div>

				<Link
					to={"/shop/accessories"}
					className="list-items"
				>
					Shoes
				</Link>

				<Link
					to={"/shop/jewelry"}
					className="list-items"
				>
					Jewelry
				</Link>
				<Link
					to={"/shop/bags"}
					className="list-items"
				>
					Bags
				</Link>
				<Link
					to={"/shop/hats"}
					className="list-items"
				>
					Hats
				</Link>
			</div>
		</aside>
	);
};

export default Aside;
