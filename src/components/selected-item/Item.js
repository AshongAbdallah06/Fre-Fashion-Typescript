import React, { useEffect, useState } from "react";
import "../../styles/item.css";
import ItemAside from "./ItemAside";
import ItemDescription from "./ItemDescription";
import PurchaseForm from "./PurchaseForm";
import Loading from "../Loading";

const Item = ({
	productName,
	productPrice,
	productImage,
	productType,
	productQuantity,
	productId,
	title = productName && productName,
}) => {
	document.title = title;

	const [loading, setLoading] = useState(false);

	const loadingFunction = () => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clear the timeout if the component unmounts
		return () => clearTimeout(timer);
	};

	useEffect(() => {
		loadingFunction();
	}, []);

	return (
		<div>
			{loading && <Loading />}

			{!loading && (
				<>
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

							<PurchaseForm
								productName={productName}
								productPrice={productPrice}
								productImage={productImage}
								productQuantity={productQuantity}
								productId={productId}
							/>
						</div>
					</section>
				</>
			)}
		</div>
	);
};

export default Item;
