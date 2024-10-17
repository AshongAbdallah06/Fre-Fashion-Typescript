import React from "react";

const ItemAside = ({ productImage }: { productImage: string | undefined }) => {
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
