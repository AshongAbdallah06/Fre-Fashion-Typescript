import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
	productName: string | null;
	productPrice: string | null;
	productType: string | null;
}

const ItemDescription: FC<Props> = ({ productName, productPrice, productType }) => {
	return (
		<>
			<Link
				to={`/shop/${productType && productType.toLowerCase()}`}
				className="item-category"
			>
				{productType}
			</Link>
			<h2 className="item-name">{productName}</h2>
			<div className="price">$ {productPrice} USD</div>
		</>
	);
};

export default ItemDescription;
