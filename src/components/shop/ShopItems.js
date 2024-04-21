import React from "react";
import formatCurrency from "../../utils/money";
import useProducts from "../../useProducts";

const ShopItems = () => {
	const { items } = useProducts();
	return (
		<div className="items-row shop">
			{items.map((item) => (
				<div className="product-item">
					<div className="product-image">
						<img
							alt="product"
							src={item.image}
						/>
					</div>
					<h4 className="product-name">{item.name}</h4>
					<p className="price">$ {formatCurrency(item.price)} USD</p>
				</div>
			))}
		</div>
	);
};

export default ShopItems;
