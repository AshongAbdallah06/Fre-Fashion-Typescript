import React, { FC, useEffect, useState } from "react";
import "../../styles/item.css";
import ItemAside from "./ItemAside";
import ItemDescription from "./ItemDescription";
import PurchaseForm from "./PurchaseForm";
import Loading from "../Loading";

interface Props {
	productName: string | null;
	productPrice: string | null;
	productImage: string | undefined;
	productType: string | null;
	productQuantity: number | null;
}

const Item: FC<Props> = ({
	productName,
	productPrice,
	productImage,
	productType,
	productQuantity,
}) => {
	// document.title =  productName && productName ;

	const [loading, setLoading] = useState(false);

	const loadingFunction = () => {
		//setLoading;
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clear the timeout if the component unmounts
		return () => clearTimeout(timer);
	};

	useEffect(() => {
		//loadingFunction();
	}, []);

	return (
		<div>
			{loading && <Loading />}

			{!loading && (
				<>
					<div className="heading">
						<h1 className="product-title">{productName && productName}</h1>
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
							/>
						</div>
					</section>
				</>
			)}
		</div>
	);
};

export default Item;
