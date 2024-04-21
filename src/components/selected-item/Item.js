import React from "react";
import "../../styles/item.css";
import ItemAside from "./ItemAside";
import ItemDescription from "./ItemDescription";
import PurchaseForm from "./PurchaseForm";

const Item = ({
	productName,
	productPrice,
	productImage,
	productType,
	title = productName && productName,
}) => {
	return (
		<div>
			<div className="heading">
				<h1 className="product-title">{title}</h1>
			</div>

			<section className="item section">
				<ItemAside productImage={productImage} />

				<div className="right">
					<ItemDescription
						productName={productName}
						productPrice={productPrice}
						productType={productType}
					/>

					<PurchaseForm />
				</div>
			</section>
		</div>
	);
};

export default Item;