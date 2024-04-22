import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import useProducts from "../useProducts";
import formatCurrency from "../utils/money";

const SharedItems = () => {
	const { items } = useProducts();
	const { setProduct, itemQuantity } = useContext(AppContext);

	return (
		<>
			{items.map((item) => (
				<Link
					to={`/shop/${item.name.replaceAll(" ", "-").toLowerCase()}`}
					className="product-item"
					key={item.id}
					onClick={() => {
						setProduct({
							name: item.name,
							price: item.price,
							product_image: item.image,
							quantity: itemQuantity,
							type: item.type,
						});
					}}
				>
					<div className="product-image">
						<img
							alt="product"
							src={item.image}
						/>
					</div>

					<h4 className="product-name">{item.name}</h4>

					<p className="price">$ {formatCurrency(item.price)} USD</p>
				</Link>
			))}
		</>
	);
};

export default SharedItems;
