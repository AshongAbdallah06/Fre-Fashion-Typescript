import React from "react";

const ItemAside = ({ productImage }) => {
	return (
		<aside className="item">
			<img
				src={productImage}
				className="item-image"
				alt="product"
			/>
		</aside>
	);
};

export default ItemAside;
